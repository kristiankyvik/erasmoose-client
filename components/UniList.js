import ErrorMessage from './ErrorMessage'
import Modal from './Modal'
import React from 'react';
import UniListSearchResultsWithData from './UniListSearchResultsWithData'
import TypeformButton from './TypeformButton'

const { joinUniCity, createListOfWeights, getFilterResults, getRankingUniCity, rankingUniOptions, rankingCityOptions} = require('./UniListFilterQuery');
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
      filterObj: {
        country: '',
        language: '',
        area: '',
        uniRating: false,
        fees: false,
        weekly_hours: false,
        int_orientation: false,
        openness: false,
        opportunities: false,
        easiness: false,
        cheapness: false,
        free_time: false,
        uni_cheapness: false,
        clubs: false,
        party: false,
        monthly_cost: false,
        student_friendliness: false,
        travel_options: false,
        culture: false,
        nightlife: false,
        gastronomy: false,
        sports: false,
        city_cheapness: false
      }
    };
  }

  setFilterObj = lodash.debounce((dropdown, value) => {
    console.log("setFilterObj", value, dropdown);
    const filterObjTemp = {...this.state.filterObj}
    filterObjTemp[dropdown] = value;
    this.setState({filterObj: filterObjTemp})
    console.log("COJONUDO", this.createSearchObj(this.getSearchKey(), this.state.filterObj, createListOfWeights(this.state.filterObj, rankingUniOptions), createListOfWeights(this.state.filterObj, rankingCityOptions)));

  }, DELAY_SEARCH_FOR_UNI_IN_MS);

  setBooleanFilter = lodash.debounce((attribute) => {
    console.log("setBooleanFilter", attribute);
    const filterObjTemp = {...this.state.filterObj}
    filterObjTemp[attribute] = !this.state.filterObj[attribute];
    this.setState({filterObj: filterObjTemp})
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

  getSearchKey = () =>{
    return this.props.pathname == '/' ? this.state.searchKey : lodash.get(this.props.query, 'q', '');
  }

  createSearchObj = (searchKey, filterObject, rankingUni, rankingCity) => {
    return joinUniCity.concat(getFilterResults(filterObject, searchKey)).concat(getRankingUniCity(rankingUni, rankingCity));

  }

  render() {
    console.log("THIS STATE FILTEROBJS CHANGES", this.state.filterObj)
    return (
      <section className="tc pt5">
        <UniListSearchResultsWithData
          liveFilter={this.props.liveFilter} 
          query={this.props.query}
          pathname={this.props.pathname}
          setSearchObj={this.setSearchObj}
          searchObj={this.createSearchObj(this.getSearchKey(), this.state.filterObj, createListOfWeights(this.state.filterObj, rankingUniOptions), createListOfWeights(this.state.filterObj, rankingCityOptions))} 
          setFilterObj={this.setFilterObj}
          setBooleanFilter={this.setBooleanFilter}
          setSearchKey={this.setSearchKey} 
          setRankingCity={this.setRankingCity} 
          setRankingUni={this.setRankingUni} 
          filterObj={this.state.filterObj}
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
