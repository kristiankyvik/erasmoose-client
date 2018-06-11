import React from 'react'
import { gql, graphql } from 'react-apollo'
import { getUnisWithReview } from '../graphql/queries'

function countReviews(data) {
  if (data.loading || data._allReviewsMeta == undefined) return null;
  return (
    <div className="flex pr4 flex-column ph3 pl5-l">
      <div className="flex items-center f6 b pb1">
        METRICS:
      </div>
      <div className="flex flex-column pl2">
        <div className="tl">
          <span className="b f6">
            <i className="fa fa-university mr1" aria-hidden="true"></i>
            { data._allReviewsMeta.unisCount } unis
          </span>
        </div>
        <div className="tl">
          <span className="b f6">
            <i className="fa fa-user mr2" aria-hidden="true"></i>
            { data._allReviewsMeta.reviewCount } reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export default graphql(getUnisWithReview, {
  options: {
    notifyOnNetworkStatusChange: true
  },
  props: (props) => props.data
})(countReviews);
