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
	  	<div className="flex black pt3 justify-between">
	    	{
	    		data.loading || data.getReviews.length <= 0 ? (
	    			<div className="flex w-100 justify-between">
	    				<div className="review-placeholder w-33">
	    				  <div className="h-200 animated-background">
	    				    <div className="background-masker white-line first"></div>
									<div className="background-masker white-line second"></div>
									<div className="background-masker white-line third"></div>
									<div className="background-masker white-line fourth"></div>
									<div className="background-masker white-line fifth"></div>
									<div className="background-masker white-line large"></div>
									<div className="background-masker white-line large"></div>
									<div className="background-masker white-line small-l"></div>
									<div className="background-masker white-line small-r"></div>
	    				  </div>
	    				</div>
	    				<div className="review-placeholder w-33">
	    				  <div className="h-200 animated-background">
	    				    <div className="background-masker white-line first"></div>
									<div className="background-masker white-line second"></div>
									<div className="background-masker white-line third"></div>
									<div className="background-masker white-line fourth"></div>
									<div className="background-masker white-line fifth"></div>
									<div className="background-masker white-line large"></div>
									<div className="background-masker white-line large"></div>
									<div className="background-masker white-line small-l"></div>
									<div className="background-masker white-line small-r"></div>
	    				  </div>
	    				</div>
	    				<div className="review-placeholder w-33">
	    				  <div className="h-200 animated-background">
	    				    <div className="background-masker white-line first"></div>
									<div className="background-masker white-line second"></div>
									<div className="background-masker white-line third"></div>
									<div className="background-masker white-line fourth"></div>
									<div className="background-masker white-line fifth"></div>
									<div className="background-masker white-line large"></div>
									<div className="background-masker white-line large"></div>
									<div className="background-masker white-line small-l"></div>
									<div className="background-masker white-line small-r"></div>
	    				  </div>
	    				</div>
	    			</div>
	    		) : data.getReviews.map((review) => (
		    			<div className="flex flex-auto review flex-column justify-center modal-card mr2 pv3 grad-green relative" key={review._id}>
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
			    		border: 1px solid #ededee;
			    		color: #4f5057;
			    		max-width: 33%;
	    			  max-width: 250px;
	    		    height: 250px;
						}
						.review-text {
							height: 210px;
							overflow-y: scroll;
						}
						.h-200 {
							height: 200px;
						}
						.review-placeholder {
						  background: #fff;
						  border: 1px solid;
						  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
						  border-radius: 3px;
						  padding: 25px;
						  max-width: 250px;
					    height: 250px;
					    box-sizing: border-box;
						}
						.animated-background {
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

						.white-line {
						  position: absolute;
						  right: 0px;
						  left: 0px;
						  height: 10px;
						}

						.first {
						   top: 10px;
						}
						.second {
						   top: 30px;
						}
						.third {
						   top: 50px;
						}
						.fourth {
						   top: 70px;
						}
						.fifth {
						   top: 90px;
						}
						.large {
						  height: 80px;
						  top: 110px
						}
						.small-l {
						  top: 190px;
						  width: 30px;
						  height: 20px;
						}
						.small-r {
						  top: 190px;
						  right: 0px;
						  width: 30px;
						  height: 20px;
						  left: auto;
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