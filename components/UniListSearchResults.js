import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Search from './Search'
import React from 'react';
import UniListResults from './UniListResults'

class UniListSearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    if (this.props.allUnis && (this.props.allUnis.length != this.props.uniNum)) {
      this.props.setUniNum(this.props.allUnis.length);
      this.props.setAllUnis(this.props.allUnis);
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
      _handleCardClick,
      liveFilter
    } = this.props;
    return (
      <div className="pt4">
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
            loadMorePosts={loadMorePosts}
            fetchMore={fetchMore}
            _handleCardClick={_handleCardClick}
           />
        </div>
      </div>
    )
  }
}

export default UniListSearchResults;