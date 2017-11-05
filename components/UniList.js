import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import Card from './Card'
import Modal from './Modal'
import Search from './Search'
import React from 'react';
import TypeformButton from '../components/TypeformButton'

const POSTS_PER_PAGE = 33;

class UniListResults extends React.Component {
  constructor(props) {
    super(props);
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
    //           <TypeformButton ghost={true} uniId={allUnis[this.props.index]._id} ref={(el) => { this.tfbtn = el; }} />
    const getUI = () => {
      if (error) return  <ErrorMessage message='Error loading entries.' />
      if (allUnis && allUnis.length) {
        return (
          <section className="tc">
            <div className="flex justify-center">
              <div style={{ width: 1080 }} className="flex flex-wrap justify-center animatedFadeIn">
                {allUnis.map((uni, index) =>
                  <Card
                    key={uni._id}
                    uni={uni}
                    index={index + 1}
                    _handleCardClick={(evt) => this.props._handleCardClick(evt, index, allUnis[index])}
                  />
                  )}
              </div>
            </div>
            <div className="justify-center flex pt4">
              {areMorePosts ? <div className="btn-new tc max justify-center" onClick={() => this.showMoreUnis(allUnis, fetchMore)}> {loading ? 'Loading...' : 'Show More'} </div> : ''}
            </div>
            <style jsx>{`
              @-webkit-keyframes fadein { /* Safari and Chrome */
                  from {
                      opacity: 0;
                  }
                  to {
                      opacity: 1;
                  }
                }
                .animatedFadeIn {
                  align-items: center;
                  display: flex;
                  -webkit-animation: fadein 2s;
                }
              section {
                padding-bottom: 20px;
              }
              .m0a {
                margin: 0 auto;
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
      return (
        <div className="" style={{color: "rgb(152, 149, 149)"}}>
          <div className="pt4 pb3 f3">
            <div className="">
              Don't find your uni? 
            </div>
            Be the first to review it!
          </div>
          <TypeformButton />
        </div>
      )
    }
    return (
      <div>
        <Search upateSearchParent={this.props.upateSearchParent} loading={loading}/>  
        <div className="flex justify-center">
          {getUI()}
        </div> 
      </div>    
    )
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
const UniListResultsWithData = graphql(allUnis, {
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
})(UniListResults)


export default class UniList extends React.Component {
  constructor(props) {
    super(props);
    this.modal = null;
    this.tfbtn = null;
    this.state = {
      showModal: false,
      index: 0,
      searchKey: "",
      uni: null
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

  upateSearchParent(searchKey) {
    this.setState({ searchKey: searchKey });
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

  render() {
    return (
      <section className="tc">

        <UniListResultsWithData 
          upateSearchParent={ (searchKey) => this.upateSearchParent(searchKey)} 
          searchKey={this.state.searchKey}
          _handleCardClick={(e, i, u) => this._handleCardClick(e, i, u)}
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
