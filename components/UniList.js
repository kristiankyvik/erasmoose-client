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
      index: 0,
      searchKey: "",
      uni: null,
      uniNum: 0,
      allUnis: []
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  _handleCardClick = (e, index, uni) => {
    document.body.classList.toggle('modalOpen', true);
    this.setState({
      showModal: true,
      index,
      uni: uni
    });
  }

  triggerSearchInDB = lodash.debounce((searchKey) => {
    this.setState({ searchKey: searchKey });
  }, DELAY_SEARCH_FOR_UNI_IN_MS);

  _handleModalLeftClick = (e) => {
    const index = this.state.index - 1 <= 0 ? this.state.uniNum - 1 : this.state.index - 1;
    this.setState({ 
      index: index,
      uni: this.state.allUnis[index]
    });
  }

  _handleModalRightClick = (e) => {
    const index = this.state.index + 1 >= this.state.uniNum ? 0 : this.state.index + 1;
    this.setState({ 
      index: index,
      uni: this.state.allUnis[index]
    });
  }

  _handleModalCloseClick = (e) => {
    if (e.target.classList.contains("backModal") || e.target.classList.contains("close")) {
      this.setState({ showModal: false });
      document.body.classList.remove('modalOpen')
    }
  }

  _handleFormClick = (e) => {
    this.tfbtn.launchForm()
  }

  _handleGlobalKeyPress = (e) => {
    if (!this.state.showModal) return;
    if (e.keyCode === 37) {
      this._handleModalLeftClick();
    } else if (e.keyCode === 39) {
      this._handleModalRightClick();
    }
  }

  setUniNum(uniNum) {
    this.setState({uniNum});
  }

  setAllUnis(allUnis) {
    this.setState({allUnis});
  }

  render() {
    return (
      <section className="tc">
        { this.state.allUnis[0] ? <TypeformButton ghost={true} uniId={this.state.allUnis[this.state.index]._id} ref={(el) => { this.tfbtn = el; }} /> : null }
        <UniListSearchResultsWithData
          index={this.state.index}
          query={this.props.query}
          pathname={this.props.pathname}
          triggerSearchInDB={this.triggerSearchInDB} //function triggering a change in searchKey 
          searchKey={this.state.searchKey} //searchKey needed for graphql call, if changed new call to db is executed
          liveFilter={this.props.liveFilter} 
          _handleCardClick={this._handleCardClick}
          setUniNum={(n) => this.setUniNum(n)} 
          setAllUnis={(n) => this.setAllUnis(n)}
          uniNum={this.state.uniNum}
        />

        <Modal
          ref={(el) => { this.modal = el; }}
          showModal={this.state.showModal}
          uni={this.state.uni}
          _handleModalRightClick={this._handleModalRightClick}
          _handleModalLeftClick={this._handleModalLeftClick}
          _handleModalCloseClick={this._handleModalCloseClick}
          _handleGlobalClick={this._handleGlobalClick}
          _handleFormClick={this._handleFormClick}
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
