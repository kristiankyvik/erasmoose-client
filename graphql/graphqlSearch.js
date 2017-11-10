import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag'
import React from 'react';
import initApollo from './initApollo'

const lodash = require('lodash'); //get lodash library
const EXECUTE_SEARCH_ONCE_EVERY = 300;

function getGraphql(setAllUnis, setAllUnisMeta, setLoading, setThresholdToDefault, increaseThreshold, setloadingShowMoreButton, setError){

  const client = initApollo()
  let postsPerPage = 33;
  let searchKeyGlobal = '';

  let setUnisSearch = (searchKey) => {
    searchKeyGlobal = searchKey
    postsPerPage = 33;
    setLoading(true);
    setThresholdToDefault();
    setUnis(searchKey);
  }

  let setUnisLoadMore = () => { //It should be possible to do this better with fetchMore, but does not work atm
    postsPerPage += 33;
    setloadingShowMoreButton(true);
    increaseThreshold();
    setUnis(searchKeyGlobal);

    // this.executeQuery(this.state.searchKey, this.state.posts_per_page)
    // .then((query) => {
    //   const allUnisUpdated = query.fetchMore({
    //     variables: {
    //       skip: allUnis.length,
    //     },
    //     updateQuery: (previousResult, { fetchMoreResult }) => {
    //       if (!fetchMoreResult) {
    //         return previousResult
    //       }
    //       return Object.assign({}, previousResult, {
    //         // Append the new posts results to the old one
    //         allUnis: [...previousResult.allUnis, ...fetchMoreResult.allUnis]
    //       })
    //     }
    //   });
    //   this.props.setAllUnis(allUnisUpdated);
    // });
  }

  let setUnis = lodash.debounce((searchKey) => {
    executeQuery(searchKey)
      .then((query) => {
        return query.result()
      })
      .then(searchResult => {
        const { data: { allUnis, _allUnisMeta }, loading } = searchResult;
        setAllUnis(allUnis);
        setAllUnisMeta(_allUnisMeta);
        setLoading(loading);
        setloadingShowMoreButton(loading);
      }, (error) => {
        setLoading(false);
        setloadingShowMoreButton(false);
        setError(true);
      });
    }, EXECUTE_SEARCH_ONCE_EVERY)

  let executeQuery = async (searchKey) => (await client.watchQuery({
    query: ALL_UNIS_QUERY,
    variables: {
      skip: 0,
      first: postsPerPage,
      searchKey: searchKey
    }
  }));

  const ALL_UNIS_QUERY = gql`
      query allUnis($first: Int!, $searchKey: String) {
        allUnis(first: $first, searchKey: $searchKey) {
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

    return {
      setUnisSearch: setUnisSearch,
      setUnisLoadMore: setUnisLoadMore,
    }
}

export default getGraphql;

