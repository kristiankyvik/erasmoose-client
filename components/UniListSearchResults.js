import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Search from './Search'
import React from 'react';
import UniListResults from './UniListResults'
import Modal from './Modal'
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
      allUnis: [],
      city_id: "",
      city: null,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  _handleCardClick = (e, index, uni) => {
    console.log("cardCLick", e, index, uni);
    this.props.setCityId(uni.city_id);
    this.setState({
      showModal: true,
      index,
      uni: uni
    });
  }

 
  _handleModalLeftClick = (e) => {
    const index = this.state.index - 1 <= 0 ? this.props.allUnis.length - 1 : this.state.index - 1;
    this.setState({ 
      index: index,
      uni: this.props.allUnis[index]
    });
    this.props.setCityId(this.props.allUnis[index].city_id);
  }

  _handleModalRightClick = (e) => {
    const index = this.state.index + 1 >= this.props.allUnis.length ? 0 : this.state.index + 1;
    console.log("right",this.state.index,  this.props.allUnis.length);
    this.setState({ 
      index: index,
      uni: this.props.allUnis[index]
    });
    this.props.setCityId(this.props.allUnis[index].city_id);

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
      triggerSearchInDB,
      liveFilter,
      getCity
    } = this.props;

    // console.log("STATE", this.state);
    // console.log("PROPS", this.props);

    return (
      <div className="">
        <Search 
          liveFilter={liveFilter}
          triggerSearchInDB={triggerSearchInDB}
          loading={loading}
          query={this.props.query}
        />
        <div className="flex justify-center pt5">
          <UniListResults 
            loading={loading}
            error={error}
            allUnis={allUnis}
            _allUnisMeta={_allUnisMeta}
            city={getCity}
            loadMorePosts={loadMorePosts}
            fetchMore={fetchMore}
            _handleCardClick={this._handleCardClick}
           />
        </div>
        { 
          (!this.state.showModal || !this.state.uni || !getCity ) ? null : (<Modal
              ref={(el) => { this.modal = el; }}
              showModal={this.state.showModal}
              uni={this.state.uni}
              city={this.props.getCity}
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