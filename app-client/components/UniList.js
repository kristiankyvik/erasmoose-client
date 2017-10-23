import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Modal from './Modal'
import React from 'react';

const POSTS_PER_PAGE = 32;

function UniList ({ data: { loading, error, allUnis, _allUnisMeta }, loadMorePosts }) {
  if (error) return <ErrorMessage message='Error loading entries.' />
  if (allUnis && allUnis.length) {
    return (
      <Unis _allUnisMeta={_allUnisMeta} allUnis={allUnis} loading={loading} loadMorePosts={loadMorePosts} />
    )
  }
  return <div>Loading</div>
}

class Unis extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = null;
    this.modal = null;
    this.state = {
      data: [],
      allData: [],
      showModal: false,
      index: 0
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  _handleCardClick = (e, index) => {
    this.setState({ 
      showModal: true,
      index
    });
  }

  _handleModalLeftClick = (e) => {
    const index = this.state.index <= 0 ? allUnis.length - 1 : this.state.index - 1;     
    this.setState({ index: index });
  }

  _handleModalRightClick = (e) => {
    const index = this.state.index >= allUnis.length ? 0 : this.state.index + 1;     
    this.setState({ index: index });
  }

  _handleModalCloseClick = (e) => {
    this.setState({ showModal: false });
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
    const { allUnis, _allUnisMeta, loading, loadMorePosts } = this.props;
    const areMorePosts = allUnis.length < _allUnisMeta.count;
    console.log("LOADING", loading);
    return (
      <section className="tc">
        <div className="flex justify-center">
          <div style={{ width: 1080 }} className="flex flex-wrap">
            {allUnis.map((uni, index) =>
              <Card 
                key={uni._id}
                uni={uni}
                _handleCardClick={(evt) => this._handleCardClick(evt, index)}
              />
            )}
            {areMorePosts ? <div className="flex-auto ma2 ur-btn tc justify-center" onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </div> : ''}
          </div>
        </div>
        <Modal 
          ref={(el) => { this.modal = el; }}
          showModal={this.state.showModal}
          uni={allUnis[this.state.index]}
          _handleModalRightClick={this._handleModalRightClick}
          _handleModalLeftClick={this._handleModalLeftClick}
          _handleModalCloseClick={this._handleModalCloseClick}
          _handleGlobalClick={this._handleGlobalClick}
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

const allUnis = gql`
  query allUnis($first: Int!, $skip: Int!) {
    allUnis(first: $first, skip: $skip) {
      _id
      name
      votes
      url
      website
      country
    },
    _allUnisMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UniList)
export default graphql(allUnis, {
  options: {
    notifyOnNetworkStatusChange: true,
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allUnis.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allUnis: [...previousResult.allUnis, ...fetchMoreResult.allUnis]
          })
        }
      })
    }
  })
})(UniList)
