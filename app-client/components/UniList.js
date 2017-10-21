import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Modal from './Modal'
import React from 'react';

const POSTS_PER_PAGE = 30;

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
    return (
      <section className="tc">
        <a 
          className="typeform-share button ur-btn mv3" 
          href="https://kyvikbcn.typeform.com/to/FsuJQm" 
          data-mode="drawer_right" 
          target="_blank">
            Add review
        </a> 
        <div className="flex justify-center">
          <div style={{ width: 1080 }} className="flex flex-wrap">
            {allUnis.map((uni, index) =>
              <Card 
                key={uni._id}
                uni={uni}
                _handleCardClick={(evt) => this._handleCardClick(evt, index)}
              />
            )}
          </div>
        </div>
        {areMorePosts ? <button className="ur-btn" onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
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
          .ur-btn {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            display: inline-block;
            cursor: default;
            background-color: #ED6863;
            width: auto;
            height: 45px;
            line-height: 38px;
            padding: 5px 20px 0 20px;
            font-size: 25px;
            border-radius: 4px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            text-align: center;
            font-weight: bold;
            font-family: "Source Sans Pro",sans-serif;
            max-width: 610px;
            overflow: hidden;
            -moz-transition: background-color ease-out 100ms 0ms;
            -webkit-transition: background-color ease-out 100ms 0ms;
            -o-transition: background-color ease-out 100ms 0ms;
            transition: background-color ease-out 100ms 0ms;
            color: #8d1510;
            -webkit-box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
            -moz-box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
            box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
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
