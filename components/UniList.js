import ErrorMessage from './ErrorMessage'
import Modal from './Modal'
import React from 'react';
import TypeformButton from './TypeformButton'
import Card from './Card'
import Search from './Search'
import UniListResults from './UniListResults'
import getGraphql from '../graphql/graphqlSearch';

const POSTS_PER_PAGE = 33; //has to be equal like the one in graphqlSearch.js 

export default class UniList extends React.Component {
  constructor(props) {
    super(props);
    this.modal = null;
    this.tfbtn = null;
    this.graphql = getGraphql(this.setAllUnis, this.setAllUnisMeta, this.setLoading, this.setThresholdToDefault, this.increaseThreshold, this.setloadingShowMoreButton, this.setError);
    this.state = {
      showModal: false,
      index: 0,
      uni: null,
      uniNum: 0,
      allUnis: [],
      _allUnisMeta: [],
      loading: false,
      loadingShowMoreButton: false,
      threshold: POSTS_PER_PAGE,
      isError: false
    };
  }

  setAllUnisMeta = (_allUnisMeta) => {
    this.setState({ _allUnisMeta});
  }

  setLoading = (loading) => {
    this.setState({ loading });
  }

  setloadingShowMoreButton = (loadingShowMoreButton) => {
    this.setState({ loadingShowMoreButton });
  }

  setAllUnis = (allUnis) => {
    this.setState({ allUnis });
  }

  setUniNum(uniNum) {
    this.setState({ uniNum });
  }

  setThresholdToDefault = () => {
    this.setState({ threshold: POSTS_PER_PAGE});
  }

  setError = (isError) => {
    this.setState({ isError });
  }

  increaseThreshold = () => {
    this.setState({ threshold: this.state.threshold + POSTS_PER_PAGE });
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
      document.body.classList.remove('modalOpen');
    }
  }

  _handleGlobalKeyPress = (e) => {
    if (!this.state.showModal) return;
    if (e.keyCode === 37) {
      this._handleModalLeftClick();
    } else if (e.keyCode === 39) {
      this._handleModalRightClick();
    }
  }

  render() {
    return (
      <section className="tc">
        <Search
          liveFilter={this.props.liveFilter}
          setUnisSearch={this.graphql.setUnisSearch}
          query={this.props.query}
          loading={this.state.loading}
        />
        <UniListResults
          loading={this.state.loading}
          loadingShowMoreButton={this.state.loadingShowMoreButton}
          index={this.state.index}
          graphql={this.graphql}
          allUnis={this.state.allUnis}
          _allUnisMeta={this.state._allUnisMeta}
          _handleCardClick={this._handleCardClick}
          threshold={this.state.threshold}
          isError={this.state.isError}
        />
        <Modal
          ref={(el) => { this.modal = el; }}
          showModal={this.state.showModal}
          uni={this.state.uni}
          _handleModalRightClick={this._handleModalRightClick}
          _handleModalLeftClick={this._handleModalLeftClick}
          _handleModalCloseClick={this._handleModalCloseClick}
          _handleGlobalClick={this._handleGlobalClick}
          _handleCardClick={ () => this._handleCardClick()}
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
