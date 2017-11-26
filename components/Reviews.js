import React from 'react'
import { gql, graphql } from 'react-apollo'

function reviews(data) {
	if (data.loading || data.getReviews <= 0) return null;
  return (
  	<div>
	  	<div className="black pb0 pt3">
	  		<div className="f3 b">Latest Reviews</div>
	  		<div className="f5 gray">The main metrics and such</div>
	  	</div>
	    <div className="flex black">
	    	{
	    		data.getReviews.map((review) => (
	    			<div className="flex flex-auto review flex-column justify-center modal-card mt3 mr2 pv3 grad-green relative pt3" key={review._id}>
			    		<div className="i pv3 ph4 tc white f5 review-text">
			    			{review.uni_review}
			    		</div>
			    		<div className="b pv3 ph4 tc white f6">
			    			{review.date_submit}
			    		</div>
			    		<button className="absolute bottom-1 right-1 upvote pointer">42</button>
		    		</div>)
		    	)
	    	}
	  	  <style jsx>
	  			{`
			    	.review {
			    		width: 275px;
			    		height: 250px;
						}
						.review-text {
							height: 210px;
							overflow-y: scroll;
						}
						::-webkit-scrollbar {
						    width: 0px;  /* remove scrollbar space */
						    background: transparent;  /* optional: just make scrollbar invisible */
						}
						/* optional: show position indicator in red */
						::-webkit-scrollbar-thumb {
						    background: #FF0000;
						}
			    	.grad-blue {
			    		background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
			    	}
			    	.grad-pink {
			    		background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
			    	}
			    	.grad-purple {
			    		background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
			    	}
			    	.grad-green {
			    		background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
			    	}
			    	.grad-orange {
				    	background-image: linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);
			    	}
	  	    `}
	  	  </style>
	    </div>
    </div>
  );
}

const getUnisWithReview = gql`
  query getReviews($city_id: String, $university_id: String) {
    getReviews(city_id: $city_id, university_id: $university_id) {
      uni_review
      city_review
      date_submit
      _id
    }
  }
`

export default graphql(getUnisWithReview, {
	notifyOnNetworkStatusChange: true,
  options: (ownProps) => ({
  variables: {
    city_id: ownProps.city_id,
    university_id: ownProps.university_id
    },
  }),
  props: (props) => props.data
})(reviews);
