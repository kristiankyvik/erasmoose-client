import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Modal from './Modal'
import React from 'react';
import TypeformButton from '../components/TypeformButton'


const POSTS_PER_PAGE = 33;
let SEARCHKEY = 'London'

class UniList extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = null;
    this.modal = null;
    this.tfbtn = null;
    this.state = {
      data: [],
      allData: [],
      showModal: false,
      index: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleGlobalKeyPress, false);
  }

  _handleCardClick = (e, index) => {
    document.body.classList.toggle('modalOpen', true);
    this.setState({
      showModal: true,
      index
    });
  }

  _handleModalLeftClick = (e) => {
    const index = this.state.index <= 0 ? this.props.allUnis.length - 1 : this.state.index - 1;
    this.setState({ index: index });
  }

  _handleModalRightClick = (e) => {
    const index = this.state.index >= this.props.allUnis.length ? 0 : this.state.index + 1;
    this.setState({ index: index });
  }

  _handleModalCloseClick = (e) => {
    this.setState({ showModal: false });
    document.body.classList.remove('modalOpen')
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

  showMoreUnis = (allUnis, fetchMore) => fetchMore({
    variables: {
      skip: allUnis.length,
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

  render() {
    const { loading, error, allUnis, _allUnisMeta, loadMorePosts, fetchMore } = this.props;
    const areMorePosts = allUnis.length < _allUnisMeta.count;

    if (error) {
      return <ErrorMessage message='Error loading entries.' />
    }

    if (allUnis && allUnis.length) {
      return (
        <section className="tc">
          <div className="flex justify-center">
            <div style={{ width: 1080 }} className="flex flex-wrap justify-center">
              {allUnis.map((uni, index) =>
                <Card
                  key={uni._id}
                  uni={uni}
                  index={index + 1}
                  _handleCardClick={(evt) => this._handleCardClick(evt, index)}
                />
                )}
            </div>
          </div>
          <div className="justify-center flex pt4">
            {areMorePosts ? <div className="btn-new tc max justify-center" onClick={() => this.showMoreUnis(allUnis, fetchMore)}> {loading ? 'Loading...' : 'Show More'} </div> : ''}
          </div>
          <TypeformButton ghost={true} uniId={allUnis[this.state.index]._id} ref={(el) => { this.tfbtn = el; }} />
          <Modal
            ref={(el) => { this.modal = el; }}
            showModal={this.state.showModal}
            uni={allUnis[this.state.index]}
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
            .btn-new {
              display: inline-block;
              cursor: pointer;
              margin: 0 auto;
              padding: .4375em 1.5em .5em;
              color: #fff;
              font-size: 1.5em;
              font-weight: 800;
              line-height: 1;
              vertical-align: middle;
              text-align: center;
              white-space: nowrap;
              border: 3px solid transparent;
              background-color: #333;
              border-radius: 2.5em;
            }
          `}</style>
        </section>
      )
    }

    return <div>Loading</div>
  }
}

const allUnis = gql`
  query allUnis($first: Int!, $skip: Int!, $searchKey: String) {
    allUnis(first: $first, skip: $skip, searchKey: $searchKey) {
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
  options: (ownProps) => ({
    notifyOnNetworkStatusChange: true,
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE,
      searchKey: ownProps.searchKey
    },
  }),
  props: ({ data: { loading, error, allUnis, _allUnisMeta, fetchMore } }) => ({
    allUnis,
    _allUnisMeta,
    error,
    loading,
    fetchMore
  })
})(UniList)