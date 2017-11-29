import React from 'react'
import { gql, graphql } from 'react-apollo'

function reviews(data) {
	console.log("DATA", data);
  return (
  	<div>
	  	<div className="black pb0 pt3">
	  		<div className="f3 b">Latest Reviews</div>
	  		<div className="f5 gray">The main metrics and such</div>
	  	</div>
	  	<div className="flex black">
	    	{
	    		data.loading ? (
	    			<div className="flex">
		    			<div className="review modal-card animated-background relative">
				    		<div className="absolute w1 top-0 bottom-0 background-masker"></div>
				    		<div className="absolute w1 top-0 bottom-0 right-0 background-masker"></div>
				    		<div className="absolute h1 top-0 right-0 left-0 background-masker"></div>
				    		<div className="absolute h1 bottom-0 right-0 left-0 background-masker"></div>
				    		<div className="absolute bottom-1 right-2 w2 h2 background-masker"></div>
				    		<div className="absolute bottom-1 left-2 right-4 w4 h2 background-masker"></div>
			    		</div>
		    			<div className="review modal-card animated-background relative">
				    		<div className="absolute w1 top-0 bottom-0 background-masker"></div>
				    		<div className="absolute w1 top-0 bottom-0 right-0 background-masker"></div>
				    		<div className="absolute h1 top-0 right-0 left-0 background-masker"></div>
				    		<div className="absolute h1 bottom-0 right-0 left-0 background-masker"></div>
				    		<div className="absolute bottom-1 right-2 w2 h2 background-masker"></div>
				    		<div className="absolute bottom-1 left-2 right-4 w4 h2 background-masker"></div>
			    		</div>
		    			<div className="review modal-card animated-background relative">
				    		<div className="absolute w1 top-0 bottom-0 background-masker"></div>
				    		<div className="absolute w1 top-0 bottom-0 right-0 background-masker"></div>
				    		<div className="absolute h1 top-0 right-0 left-0 background-masker"></div>
				    		<div className="absolute h1 bottom-0 right-0 left-0 background-masker"></div>
				    		<div className="absolute bottom-1 right-2 w2 h2 background-masker"></div>
				    		<div className="absolute bottom-1 left-2 right-4 w4 h2 background-masker"></div>
			    		</div>
	    			</div>
	    		) : data.getReviews.map((review) => (
		    			<div className="flex flex-auto review flex-column justify-center modal-card mt3 mr2 pv3 grad-green relative pt3" key={review._id}>
				    		<div className="i pv3 ph4 f5 review-text">
				    			{data.university_id ? review.uni_review : review.city_review}
				    		</div>
				    		<div className="pv3 ph4 tc f6">
				    			{review.date_submit}
				    		</div>
				    		<button className="absolute bottom-1 right-1 bluish pointer">42</button>
			    		</div>)
		    	)
	    	}
	    	</div>
	  	  <style jsx>
	  			{`
			    	.review {
			    		width: 275px;
			    		height: 250px;
			    		border: 1px solid #ededee;
			    		color: #4f5057;
			    		max-width: 33%;
						}
						.review-text {
							height: 210px;
							overflow-y: scroll;
						}
						::-webkit-scrollbar {
						    width: 0px;  /* remove scrollbar space */
						    background: #FF0000;  /* optional: just make scrollbar invisible */
						}
						/* optional: show position indicator in red */
						::-webkit-scrollbar-thumb {
						    background: #FF0000;
						}
						.bluish {
							background-color: #25d6c9;
						}
	  	    `}
	  	  </style>
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
