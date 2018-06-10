import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Circle } from 'rc-progress';
import ProgressBar from '../components/ProgressBar'
import Reviews from '../components/Reviews'
import ModalInfoDiv from '../components/ModalInfoDiv'

const _ = require('lodash'); //get lodash library
const { round, setProgProp, setCostProgProp, showProps, getTopProps, spellReview, getRankingDescription } = require('../utils/ModalUtils');
const { rankingUniDictionary } = require('../utils/UniListQueryUtils');

export default class ModalUni extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

		const { uni, rankingUni } = this.props;

		// console.log(uni)

    return (
        <div className="flex flex-auto pv4 ph4 flex-column white">
          <div className="f3 b black pt3 tc tl-l">University Metrics ({_.get(uni,'review_count',0)} {spellReview(_.get(uni,'review_count',0))})</div>
          <div className="flex flex-column flex-row-l black">
            <div className="flex flex-1 flex-column justify-center modal-card mt3 mr3 pv3 ph3">
              <div className="f4 b circle flex pb4">
                <span className='inside-circle'>{`${setProgProp(uni.uniRating)}/100`}</span>
                <span className='info-wrap next-circle'>
                  <span className="fa fa-info-circle"></span>
                  <p className='info-description'> {getRankingDescription(rankingUni, rankingUniDictionary)} </p>	
                </span>
                <Circle className="pv2 mr3 w-100" percent={setProgProp(uni.uniRating)} strokeWidth="5
                  " trailWidth="5" strokeColor="#F44A4A" />
							  <span className='under-circle'>
							    <ProgressBar name="Recommendation" value={setProgProp(_.get(uni, 'uni_recommendation.value', 0))} icon="heart" color='#F44A4A'/>
								</span>
              </div>

              <p data-tip='' data-for='test'></p>
              <ModalInfoDiv name='Country' divProperty={uni.country} srcName='./static/icons/location.svg' />
              <ModalInfoDiv name='Ranking (Int/Nat):' divProperty='Coming soon' srcName='./static/icons/ranking.svg' />
              <ModalInfoDiv name='Flagship Areas:' divProperty={getTopProps(uni.main_disciplines)} srcName='./static/icons/subject.svg' />
              <ModalInfoDiv name='Languages:' divProperty={getTopProps(uni.languages)} srcName='./static/icons/language.svg' />
              <ModalInfoDiv name='Tuition Fees:' divProperty={uni.fees.value ? round(uni.fees.value) + " €" : "coming soon"} srcName='./static/icons/money.svg' />
              <ModalInfoDiv name='Weekly Hours of Work:' divProperty={uni.weekly_hours.value ? round(uni.weekly_hours.value) + " hours" : "coming soon"} srcName='./static/icons/time.svg' />
            </div>
            <div className="flex flex-1 flex-column justify-end modal-card mt3 mr3 pv3 ph3">
              <ProgressBar name="difficulty" value={setProgProp(_.get(uni,'difficulty.value',0))} icon="difficulty"/>
              <ProgressBar name="International Orientation" value={setProgProp(_.get(uni,'int_orientation.value',0))} icon="globe"/>
              <ProgressBar name="Openness" value={setProgProp(_.get(uni,'openness.value',0))} icon="open"/>
              <ProgressBar name="Gender Ratio (Women/Men)" value={round(_.get(uni,'female_percentage.value',0))} icon="gender"/>
              <ProgressBar name="Research Opportunities" value={setProgProp(_.get(uni,'opportunities.value',0))} icon="research"/>
              <ProgressBar name="Job/Internship Opportunities" value={setProgProp(_.get(uni,'opportunities.value',0))} icon="job"/>
              <ProgressBar name="Organizations and Student Clubs" value={setProgProp(_.get(uni,'clubs.value',0))} icon="club"/>
              <ProgressBar name="Student Parties" value={setProgProp(_.get(uni,'party.value',0))} icon="party"/>
            </div>
          </div>
          <Reviews entity={uni} type='universities'/>
				<style jsx>
					{`
						.circle {
							position: relative;
						}
						.inside-circle {
			    	  position: absolute;
			    	  top: 43%;
			    	  left: 50%;
			    	  transform: translate(-50%, -50%);
						}
						.under-circle {
							position: absolute;
							bottom: -5%;
							right: 29%;
						}
						.info-wrap:hover .info-description {
							visibility: visible;
							opacity: 1;
						}
						.next-circle {
							position: absolute;
			    	  top: 0%;
			    	  left: 68%;
			    	  transform: translate(-50%, -50%);
						}
						.info-description {
							position: absolute;
							top: 10%;
							left: 100%;
							visibility: hidden;
							opacity: 0;
							width: 100px;
							font-size: 10px;
							line-height: 10px;
						}
			    	.blue {
			    		color: #F44A4A;
			    	}
			    	.hidden {
			    		display: none;
			    	}
			    	.upvote {
			    		background-color: transparent;
			    	}
			    	.upvote::before {
			    		-webkit-align-self: center;
			    		-ms-flex-item-align: center;
			    		align-self: center;
			    		border-color: transparent transparent #fff transparent;
			    		border-style: solid;
			    		border-width: 0 4px 6px 4px;
			    		content: "";
			    		height: 0;
			    		margin-right: 5px;
			    		width: 0;
			    	}
			    	.bg-oj {
			    		background-color: #ED6863;
			    		color: white;
			    	}
			    	.data-row:hover .hidden {
			    		display: flex;
			    	}
			    	.flex-1 {
			    		flex: 1;
			    	}
			    	.flex-4 {
			    		flex: 2;
			    	}
			    	@media screen and (min-width: 60em) {
			    		.flex-4 {
			    			flex: 4;
			    		}
			    	}
			    	.flex-5 {
			    		flex: 5;
			    	}

			      .controls {
			      	left: -70px;
			      	right: -70px;
			      	top: 50%;
			      	margin: -20px auto 0;
			      }
			      .right, .left {
			      	flex: 1;
			      	cursor: pointer;
			      	color: #F44A4A;
			      	padding: 0 10px
			      }
			      .stretch {
			      	position: absolute;
			      	left: 0;
			      	right: 0;
			      	top: 0;
			      	bottom: 0;
			      }
			      .active {
			          border-color: #F44A4A;
			          color: #F44A4A;
			      }
			    `}
				</style>
        </div>
     )
  }
}