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
      city_id: "",
    };
  }

  setCityId(city_id) {
    this.setState({city_id});
  }

  triggerSearchInDB = lodash.debounce((searchKey) => {
    this.setState({ searchKey: searchKey });
  }, DELAY_SEARCH_FOR_UNI_IN_MS);

  render() {
    return (
      <section className="tc">
        <UniListSearchResultsWithData
          query={this.props.query}
          pathname={this.props.pathname}
          triggerSearchInDB={this.triggerSearchInDB} //function triggering a change in searchKey 
          searchKey={this.state.searchKey} //searchKey needed for graphql call, if changed new call to db is executed
          city_id={this.state.city_id}
          setCityId={(i) => this.setCityId(i)}
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
