import ErrorMessage from './ErrorMessage'
import Modal from './Modal'
import React from 'react';
import UniListSearchResultsWithData from './UniListSearchResultsWithData'
import TypeformButton from './TypeformButton'

const { joinUniCity, defaultRankingUni, defaultRankingCity, getFilterResults, getRankingUniCity,  } = require('./UniListFilterQuery');
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
      filterObj: [], //Filter object should contain all countries that will be replaced as array of strings
      // try out for example ['Spain','France']
      // can only be used for countries in the beginning but could be changed to other things later on (city, field of study,...)
      rankingUni: defaultRankingUni, //define the formula that creates the overall uni ranking
      rankingCity: defaultRankingCity //define the formula that creates the overall city ranking
    };
  }

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

  getSearchKey = () =>{
    return this.props.pathname == '/' ? this.state.searchKey : lodash.get(this.props.query, 'q', '');
  }

  createSearchObj = (searchKey, filterObject, rankingUni, rankingCity) => {
    return joinUniCity.concat(getFilterResults(filterObject, searchKey)).concat(getRankingUniCity(rankingUni, rankingCity));
  }

  render() {
    return (
      <section className="tc pt5">
        <UniListSearchResultsWithData
          liveFilter={this.props.liveFilter} 
          query={this.props.query}
          pathname={this.props.pathname}
          setSearchObj={this.setSearchObj}
          searchObj={this.createSearchObj(this.getSearchKey(), this.state.filterObj, this.state.rankingUni, this.state.rankingCity)} 
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
