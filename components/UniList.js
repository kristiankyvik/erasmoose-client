import ErrorMessage from './ErrorMessage'
import Modal from './Modal'
import React from 'react';
import UniListSearchResultsWithData from './UniListSearchResultsWithData'
import TypeformButton from './TypeformButton'

const lodash = require('lodash'); //get lodash librar
const DELAY_SEARCH_FOR_UNI_IN_MS = 300;

export default class UniList extends React.Component {
  constructor(props) {
    super(props);
    this.modal = null;
    this.tfbtn = null;
    this.state = {
      showModal: false,
      searchKey: "",
      filterObj: {},
      rankingUni: this.getDefaultUniRanking(),
      rankingCity: this.getDefaultCityRanking()
    };
  }

  getDefaultUniRanking = () => (
    [
      "$int_orientation.value",
      "$difficulty.value",
      "$opportunities.value",
      "$openness.value",
      "$clubs.value",
      "$party.value",
      "$uni_recommendation.value",
      "$uni_recommendation.value",
      "$uni_recommendation.value",
      "$uni_recommendation.value"
    ]
  )

  getDefaultCityRanking = () => (
    [
      "$city.travel_options.value",
      "$city.culture.value",
      "$city.student_friendliness.value",
      "$city.sports.value",
      "$city.nightlife.value",
      "$city.gastronomy.value",
      "$city.city_recommendation.value",
      "$city.city_recommendation.value",
      "$city.city_recommendation.value",
      "$city.city_recommendation.value"
    ]
  )

  setFilterObj = lodash.debounce((filterObj) => {
    this.setState({ filterObj: filterObj})
  }, DELAY_SEARCH_FOR_UNI_IN_MS);

  setSearchKey = lodash.debounce((searchKey) => {
    this.setState({ searchKey: searchKey });
  }, DELAY_SEARCH_FOR_UNI_IN_MS);
  
  setRankingUni = lodash.debounce((rankingUni) => {
    this.setState({ rankingUni: rankingUni });
  }, DELAY_SEARCH_FOR_UNI_IN_MS);
  
  setRankingCity = lodash.debounce((rankingCity) => {
    this.setState({ rankingCity: rankingCity });
  }, DELAY_SEARCH_FOR_UNI_IN_MS);

  createSearchObj = () => {
    const searchKey = this.props.pathname == '/' ? this.state.searchKey : lodash.get(this.props.query, 'q', '')

    const joinUniCity = [
      {
        $lookup:
          {
            from: "cities",
            localField: "city_id",
            foreignField: "_id",
            as: "city"
          }
      },
      {
        $unwind: "$city"
      }
    ];

    const filterResults = [ //This should use this.state.filterObject somehow when implemented
      {
        $match: {
          $or: [
            {
              country: {
                '$regex': searchKey,
                '$options': 'i'
              }
            },
            {
              name: {
                '$regex': searchKey,
                '$options': 'i'
              }
            },
            {
              city_name: {
                '$regex': searchKey,
                '$options': 'i'
              }
            }
          ]
        }
      } 
    ];

    const rankUniCity = [
      {
        $addFields: {
          uniRating: {
            $avg: this.state.rankingUni
          },
          cityRating: {
            $cond: {
              if: {
                $eq: ["$review_count", 0]
              },
              then: null,
              else: {
                $avg: this.state.rankingCity
              }
            }
          }
        }
      },
      {
        $addFields: {
          overallRating: {
            $avg: [
              "$cityRating",
              "$uniRating"
            ]
          }
        }
      },
      {
        $sort: { "overallRating": -1 }
      }
    ];

    return joinUniCity.concat(filterResults).concat(rankUniCity);
  }
  
  render() {
    return (
      <section className="tc pt5">
        <UniListSearchResultsWithData
          liveFilter={this.props.liveFilter} 
          query={this.props.query}
          pathname={this.props.pathname}
          setSearchObj={this.setSearchObj}
          searchObj={this.createSearchObj()} 
          setFilterObj={this.setFilterObj}
          setSearchKey={this.setSearchKey} 
          setRankingCity={this.setRankingCity} 
          setRankingUni={this.setRankingUni} 
        />

        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          input {
            color: black;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </section>
    )
  }
}
