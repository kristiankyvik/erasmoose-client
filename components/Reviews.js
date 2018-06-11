import React from 'react'
import { gql, compose, graphql } from 'react-apollo'
import TypeformButton from '../components/TypeformButton'
import ReviewPlaceholder from '../components/ReviewPlaceholder'
import Slider from 'react-slick'
import { allUnis, updateVotes, reviews } from '../graphql/queries'

const _ = require('lodash'); //get lodash library

const settings = {
	dots: true,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
				centerMode: true
			}
		}
	]
};

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.entity._id,
			type: props.type
		};
	}


	vote = (id, updatedVotes) => {
		console.log('hallo',updatedVotes)
		console.log('this.id',id)
		console.log('this.state.type',this.state.type)
		this.props.updateVotes(id, updatedVotes, this.state.id, this.state.type)
	}

	upvote = ( id, vote) => this.vote(id, vote + 1)
	downvote = ( id, vote) => this.vote(id, vote - 1,0)

	render() {
		const { reviews } = this.props
		console.log(this.props)
		return (
			<div>
				<div className="black pb0 pt3">
					<div className="f3 b">Latest Reviews</div>
					<div className="f5 gray">The main metrics and such</div>
				</div>

				<div className="flex black pt3 justify-between relative">
					{	
						_.get(reviews,'length',0) > 0 && !this.props.loading ? (
							<Slider {...settings} className="flex w-100 justify-between">
								{
									reviews.slice().sort((a,b) => b.votes - a.votes).map((review) => (
										<div key={review._id} className="flex flex-auto review flex-column justify-center modal-card mr2 pv3 grad-green relative" key={review._id}>
											<div className="pv3 ph4 f5 review-text">
												{review.text}
												<div className="i f7 pt3 tr">
													{review.date.split()[0]}
												</div>
											</div>
											<div className="pv3 ph4 tc f6 flex justify-between">
												<div className="flex flex-1">
													X moose found this useful
		  			    			</div>
												<div className="flex flex-1">
													<div className="pa1 pointer" >
														<i className="fa fa-thumbs-o-up" aria-hidden="true" onClick={() => this.upvote(review._id, review.votes)}></i>
													</div>
													<div> {review.votes} </div>
													<div className="pa1 pointer">
														<i className="fa fa-thumbs-o-down" aria-hidden="true" onClick={() => this.downvote(review._id, review.votes)}></i>
													</div>
												</div>
											</div>
										</div>)
									)
								}
							</Slider>
						) : (
							<div className="flex w-100 justify-between">
								<ReviewPlaceholder/>
								<ReviewPlaceholder />	
								<ReviewPlaceholder />
							</div>
						)
					}
					{
						_.get(reviews,'length',0) == 0 && !this.props.loading ? (
							<div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-1 no-reviews-bg">
								<div className="relative flex w-80 tc flex-column bg-white pa4 no-reviews-box">
									<div className=" f5 f4-ns f3-l b tc z-2">
										Sadly, there are still no reviews
								</div>
									<div className="f6 f5-ns pt1 pb3">
										Be the first one to add a review
								</div>
									{/* <TypeformButton id={uni._id} cityid={uni.city_id} className="ur-btn tc flex justify-center content-center items-center" /> */}
								</div>
							</div>
						) : null
					}
				</div>
				<style jsx>
					{`
	  				* {
	  				  min-height: 0;
	  				  min-width: 0;
	  				}
	  				.no-reviews-bg {
		  				// background-color: #8080808f;
	  				}
	  				.no-reviews-box {
	  					border: 1px solid;
	  					border-color: #e5e6e9 #dfe0e4 #d0d1d5;
	  				}
			    	.review {
			    		border: 1px solid #ededee;
			    		color: #4f5057;
			    		max-width: 50%;
	    			  min-width: 240px;
	    		    height: 250px;
	    		    background-color: white;
						}
						.review-text {
							height: 182px;
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
					    height: 250px;
					    box-sizing: border-box;
						}
						.animated-background {
						}
						::-webkit-scrollbar {
						    width: 0px;  /* remove scrollbar space */
						    background: #FFF;  /* optional: just make scrollbar invisible */
						}
						/* optional: show position indicator in red */
						::-webkit-scrollbar-thumb {
						    background: #FFF;
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
}

export default compose(
	graphql(reviews, {
		options: (ownProps) => {
			return {
				notifyOnNetworkStatusChange: true,
				variables: {
					entity_id: ownProps.entity._id,
					type: ownProps.type
				},
			};
		},
		props: (props) => props.data
	}),
	graphql(updateVotes, {
		props: (props) => ({
			updateVotes: (_id, votes, entity_id, type) => props.mutate({
				variables: { _id, votes, entity_id, type},
				update: (store, mutationResult) => {
					let data = store.readQuery(
						{ 
							query: reviews,
							variables: {
								entity_id: entity_id,
								type: type	
							} 
						},
					);
					data.reviews.find(review => review._id == _id).votes = votes;
					store.writeQuery({ query: reviews, data });
				}	
			})
		})
	})
)(Reviews)


