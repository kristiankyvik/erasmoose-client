import React from 'react'
import { gql, graphql } from 'react-apollo'

function PostUpvoter ({ upvote, votes, _id }) {
  return (
    <button onClick={() => upvote(_id, votes + 1)}>
      <i className="fa fa-eye mr1" aria-hidden="true"></i> {votes}
      <style jsx>{`
        button {
          z-index: 1000;
          background-color: transparent;
          border: 1px solid transparent;
          color: white;
        }
        button:active {
          background-color: transparent;
        }
        // button:before {
        //   align-self: center;
        //   z-index: 1000;
        //   border-color: transparent transparent white transparent;
        //   border-style: solid;
        //   border-width: 0 4px 6px 4px;
        //   content: "";
        //   height: 0;
        //   margin-right: 5px;
        //   width: 0;
        // }
      `}</style>
    </button>
  )
}

const upvoteUniversity = gql`
  mutation updateUniversity($_id: String, $votes: Int) {
    updateUniversity(_id: $_id, votes: $votes) {
      _id
      __typename
      votes
    }
  }
`

export default graphql(upvoteUniversity, {
  props: ({ ownProps, mutate }) => ({
    upvote: (_id, votes) => mutate({
      variables: { _id, votes },
      optimisticResponse: {
        __typename: 'Mutation',
        updateUniversity: {
          __typename: 'University',
          _id: ownProps._id,
          votes: ownProps.votes + 1
        }
      }
    })
  })
})(PostUpvoter)
