import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Circle } from 'rc-progress';
import TypeformButton from '../components/TypeformButton'
import ProgressBar from '../components/ProgressBar'
import Reviews from '../components/Reviews'
const _ = require('lodash'); //get lodash library

const round = (v) =>  {
	if (v) {
		return Number((v).toFixed(0));		
	}
}

const setProgProp = (v) => {
	if (v) {
		return round(v/5 * 100);
	}
	return 0;
}

const setCostProgProp = (v, max) => {
	if (v) {
		return round(v/max*100);
	}
	return 0;
}

const showProps = (v) => {
	return v.join(' ');
}

const getTopProps = (a) => {
	return a.map((v) => v.name).join(", ");
}

class Modal extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    tabIndex: 0
	  };
	}

	componentDidMount() {
		document.addEventListener('mousedown', this._handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this._handleClick, false);
	}

	getCityRating(city){
		return _.get(city,'city_recommendation.value')
	}

	getUniRating(uni) { //TODO: This has to be replaced by a general formula and connected to graphql
		return _.get(uni, 'uni_recommendation.value', 0);
	}


	render() {
		const { city, uni } = this.props;
		const cityRating = this.getCityRating(city);
		const uniRating = this.getUniRating(uni);
		const i = this.state.tabIndex;
		console.log("LOADING", this.props.loading);
	  return (
			<div 
				className={"backModal fixed z-1 db"}
				onClick={this.props._handleModalCloseClick}> 
				<div className={"absolute modal top-0 top-1-l mb0 mb1-l shadow-3 w-100 w-80-l" }>
					<div className="flex tc flex-column">
						<div 
							className="flex bg-img"
							style={{ "backgroundImage": `url("https://s3.eu-central-1.amazonaws.com/erasmoose/${this.props.uni._id}.jpg")` }} 
						>	
							<div className="absolute z-1 bottom-2 white tc left-0 right-0">
								<div className="b pt4 pt3-l f3 f2-l text-shadow">{this.props.uni.name}</div>
								<div className="f5 pb3 pt1">
									<i className="fa fa-globe mr1" aria-hidden="true"></i>
									<a href={`http://www.${this.props.uni.website}`} target="_blank" className="f4 f3-l pb3 i playfair text-shadow pointer white link">{this.props.uni.website}</a>
								</div>
								<TypeformButton id={this.props.uni._id} cityid={this.props.uni.city_id} className="ma2 mh4 ur-btn tc flex justify-center content-center items-center" />
							</div>	
						</div>
						<Tabs className="flex flex-column tl f7 no-pad" selectedTabClassName="active">
							<TabList className="flex">
								<Tab className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">University</Tab>
								<Tab className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">City</Tab>
								<Tab disabled className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">Activities</Tab>
							</TabList>
							<TabPanel className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									{/* Uni */}
									{/* ---------------------------------- */}
									<div className="f3 b black pt3 tc tl-l">University Metrics</div>
									<div className="flex flex-column flex-row-l black">
										<div className="flex flex-1 flex-column justify-center modal-card mt3 mr3 pv3 ph3">
											<div className="f4 b circle flex pb4">
												<span className='inside-circle'>{`${setProgProp(uniRating)}/100`}</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(uniRating)} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/location.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Country
														</div>
													</div>
													<span className="f7 ttu b">{uni.country}</span>
												</div>
											</div>
											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/ranking.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Ranking (Int/Nat):
														</div>
													</div>
													<span className="f7 ttu b">Coming soon</span>
												</div>
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/subject.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Flagship Areas:
														</div>
													</div>
													<span className="f7 ttu b">{getTopProps(uni.main_disciplines)}</span>
												</div>
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/language.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Languages:
														</div>
													</div>
													<span className="f7 ttu b">{getTopProps(uni.languages)}</span>
												</div>
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/money.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Tuition Fees:
														</div>
													</div>
													<span className="f7 ttu b">{uni.fees.value ? round(uni.fees.value) + " €" : "coming soon"}</span>
												</div>
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/time.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pt1 pb1 justify-between">
														<div className="flex">
															Weekly Hours of Work:
														</div>
													</div>
													<span className="f7 b">{uni.weekly_hours.value ? round(uni.weekly_hours.value) + " hours" : "coming soon"}</span>
												</div>
											</div>
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
									<Reviews uni={uni} university_id={this.props.loading ? null : uni._id}/>
								</div>
							</TabPanel>	
							<TabPanel className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									{/* City */}
									{/* ---------------------------------- */}
									<div className="f3 b black pt3 tc tl-l">{this.props.loading ? null : city.name} City Metrics</div>
									<div className="flex flex-column flex-row-l black">
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr2 pv3 ph3">
											<div className="f4 b circle pb4 flex">
												<span className='inside-circle'>{`${setProgProp(cityRating)}/100`}</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(cityRating)} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/population.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Size:
														</div>
													</div>
													<span className="f7 ttu b">coming soon</span>
												</div>
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/temperature.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Weather (Winter/Spring):
														</div>
													</div>
													<span className="f7 ttu b">coming soon</span>
												</div>
											</div>

											<div className="flex items-stretch pv1">
												<div className="flex items-center justify-center">
													<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
														<img src={`./static/icons/bill.svg`} className="w2 h2" />
													</div>
												</div>
												<div className="flex flex-column self-stretch flex-1 justify-center pl2">
													<div className="flex pb1 justify-between">
														<div className="flex">
															Monthly Cost:
														</div>
													</div>
													<span className="f7 ttu b">{round(_.get(city,'monthly_cost.value',0))} €/m</span>
												</div>
											</div>
											<ProgressBar name="Student Friendliness" value={setProgProp(_.get(city,'student_friendliness.value',0))} icon="difficulty"/>
											<ProgressBar name="Travel Options" value={setProgProp(_.get(city,'travel_options.value',0))} icon="plane"/>
											<ProgressBar name="Cultural Offering" value={setProgProp(_.get(city,'culture.value',0))} icon="culture"/>
										</div>
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr2 pv3 ph3">
											<ProgressBar name="Nightlife" value={setProgProp(_.get(city,'nightlife.value',0))} icon="nightlife"/>
											<ProgressBar name="Gastronomy" value={setProgProp(_.get(city,'gastronomy.value',0))} icon="gastronomy"/>
											<ProgressBar name="Sports" value={setProgProp(_.get(city,'sports.value',0))} icon="sports"/>
											<div className="f5 b pt4">Student Cost of life</div>
											<ProgressBar name="Rent" cost={round(_.get(city,'rent_cost.value',0))} value={setCostProgProp(_.get(city,'rent_cost.value',0), 800)} icon="rent"/>
											<ProgressBar name="Beer in a Pub" cost={round(_.get(city,'beer_cost.value',0))} value={setCostProgProp(_.get(city,'beer_cost.value',0), 10)} icon="beer"/>
											<ProgressBar name="Coffee" cost={round(_.get(city,'coffee_cost.value',0))} value={setCostProgProp(_.get(city,'coffee_cost.value',0), 10)} icon="cafe"/>
											<ProgressBar name="Kebab" cost={round(_.get(city,'kebab_cost.value',0))} value={setCostProgProp(_.get(city,'kebab_cost.value',0), 15)} icon="burger"/>
											<ProgressBar name="Entry fee Club" cost={round(_.get(city,'danceclub_cost.value',0))} value={setCostProgProp(_.get(city,'danceclub_cost.value',0), 30)} icon="music"/>
										</div>
									</div>
									<Reviews uni={uni} city_id={this.props.loading ? null : city._id}/>
								</div>
							</TabPanel>
							<TabPanel>		
							</TabPanel>						
						</Tabs>
						<div className="dn flex-l controls absolute f1">
							<div className="flex left z-0">
								<i className="fa fa-angle-left z-1" aria-hidden="true" onClick={this.props._handleModalLeftClick}></i>
							</div>
							<div className="flex right justify-end f1 z-0" >
								<i className="fa fa-angle-right z-1" aria-hidden="true" onClick={this.props._handleModalRightClick}></i>
							</div>
						</div>
					</div>
					<div className="red f1 z-1 absolute ph3 right-0 top-0 pointer close" onClick={this.props._handleModalCloseClick}>
						x
					</div>
				</div>
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
			    	.bg-img {
			    		background-size: cover;
			    		background-repeat: no-repeat;
			    		background-position: center center;
			    		min-height: 30vh;
			    		position: relative;
			    	}

			    	.bg-img ::before {
					    position: absolute;
					    top: 0;
					    right: 0;
					    left: 0;
					    bottom: 0;
					    background-color: rgba(0,0,0,0.3);
					    content: "";
					    border-radius: 10px;
						}
			      .backModal {
			        background: rgba(30,30,30,0.9);
			        top: 0;
			        left: 0;
			        z-index: 9997;
			        width: 100%;
			        height: 100%;
			        position: fixed;
			        overflow-y: scroll;
			        box-sizing: border-box;
			        -webkit-overflow-scrolling: touch;
			        overflow-y: auto;
			        -webkit-backface-visibility: hidden;
			      }
			      .modal {
			      	position: absolute;
			      	z-index: 9997;
			      	background: #f4f4f4;
			      	background-position: fixed;
			      	box-sizing: border-box;
			      	left: auto;
	      	    top: 0;
	      	    width: 100%;
	      	    max-width: 100%;
	      	    margin-left: 0;
	      	    border-radius: 0;
	      	    -webkit-backface-visibility: hidden;
			      }

          	@media only screen and (min-width : 930px) {
          		.modal {
	          		position: absolute;
	          		z-index: 9997;
	          		top: 20px;
	          		left: 50%;
	          		width: 920px;
	          		margin-left: -460px;
	          		border-radius: 6px;
	          		background: #f4f4f4;
	          		background-position: fixed;
	          		box-sizing: border-box;
          		}
          		.bg-img {
          			border-top-right-radius: 6px;
          			border-top-left-radius: 6px;
          		}
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
	  );
	}
}
export default Modal;

