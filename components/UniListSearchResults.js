import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Search from './Search'
import React from 'react';
import UniListResults from './UniListResults'
import Modal from './Modal'
import Filters from './Filters'

const _ = require('lodash'); //get lodash librar

class UniListSearchResults extends React.Component {
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
    this.setState({
      showModal: true,
      index,
      uni: uni
    });
    document.body.classList.toggle('modalOpen', true);
  }
 
  _handleModalLeftClick = (e) => {
    const index = this.state.index - 1 <= 0 ? this.props.allUnis.length - 1 : this.state.index - 1;
    this.setState({ 
      index: index,
      uni: this.props.allUnis[index]
    });
  }

  _handleModalRightClick = (e) => {
    const index = this.state.index + 1 >= this.props.allUnis.length ? 0 : this.state.index + 1;
    this.setState({ 
      index: index,
      uni: this.props.allUnis[index]
    });
  }

  _handleModalCloseClick = (e) => {
    if (e.target.classList.contains("backModal") || e.target.classList.contains("close")) {
      this.setState({ showModal: false });
      document.body.classList.remove('modalOpen')
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
    const {
      loading,
      error,
      allUnis,
      _allUnisMeta,
      loadMorePosts,
      fetchMore,
      liveFilter,
      postPerPage
    } = this.props;

    return (
      <div className="">
        <Search 
          liveFilter={liveFilter}
          setSearchKey={this.props.setSearchKey}
          loading={loading}
          query={this.props.query}
        />
        <Filters
          setFilterObj={this.props.setFilterObj}
          setRankingCity={this.props.setRankingCity}
          setRankingUni={this.props.setRankingUni} 
          loading={loading}
        />
        <div className="flex justify-center pt3">
          <UniListResults 
            loading={loading}
            error={error}
            allUnis={allUnis}
            _allUnisMeta={_allUnisMeta}
            loadMorePosts={loadMorePosts}
            fetchMore={fetchMore}
            _handleCardClick={this._handleCardClick}
            postPerPage={postPerPage}
           />
        </div>
        { 
          (!this.state.showModal ) ? null : (<Modal
              ref={(el) => { this.modal = el; }}
              loading={loading}
              showModal={this.state.showModal}
              uni={this.state.uni}
              _handleModalRightClick={this._handleModalRightClick}
              _handleModalLeftClick={this._handleModalLeftClick}
              _handleModalCloseClick={this._handleModalCloseClick}
              _handleGlobalClick={this._handleGlobalClick}
              _handleCardClick={this._handleCardClick}
            />)
        }
      </div>
    )
  }
}

export default UniListSearchResults;