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
      filterObj: {
        country: [],
        language: [],
        area: [],
      }, 
      rankingUni: defaultRankingUni, //define the formula that creates the overall uni ranking
      rankingCity: defaultRankingCity //define the formula that creates the overall city ranking
    };
  }

  setFilterObj = lodash.debounce((dropdown, value) => {
    let filterObjTemp = { ...this.state.filterObj };
    let collectionArray = filterObjTemp[dropdown];
    const idx = filterObjTemp[dropdown].indexOf(value);

    if(idx > -1){
      collectionArray.splice(idx, 1); 
    } else {
      collectionArray.push(value);
    }
    this.setState({ filterObj: filterObjTemp });
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

  getSearchKey = () => {
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
          searchObj={this.createSearchObj(this.getSearchKey(), this.state.filterObj, this.state.rankingUni, this.state.rankingCity)} 
          setFilterObj={this.setFilterObj}
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
