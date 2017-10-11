import React from 'react'
import { gql, graphql } from 'react-apollo'

function PostUpvoter ({ upvote, votes, _id }) {
  return (
    <button onClick={() => upvote(_id, votes + 1)}>
      {votes}
      <style jsx>{`
        button {
          background-color: transparent;
          border: 1px solid #e4e4e4;
          color: #fff;
        }
        button:active {
          background-color: transparent;
        }
        button:before {
          align-self: center;
          border-color: transparent transparent #fff transparent;
          border-style: solid;
          border-width: 0 4px 6px 4px;
          content: "";
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </button>
  )
}

const upvoteUniversity = gql`
  mutation updateUniversity($_id: ID!, $votes: Int) {
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
