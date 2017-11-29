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
		document.body.classList.toggle('modalOpen', true);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this._handleClick, false);
	}

	_handleTabClick = (i, e) => {
		// this.setState({
		// 	tabIndex: i
		// });
	}

	render() {
		console.log("MODAL PROPS", this.props);

		const { city, uni } = this.props;

		const i = this.state.tabIndex;
		const addActive = (n) => { 
			const ret = i === n ? "active" : "nothing";
			return ret;
		};

	  return (
			<div 
				className={"backModal fixed z-1 flex content-center justify-center items-center"}
				onClick={this.props._handleModalCloseClick}> 
				<div className={"absolute modal top-0 top-1-l mb0 mb1-l shadow-3 w-100 w-80-l" }>
					<div className="flex tc flex-column">
						<div 
							className="flex bg-img"
							style={{ "backgroundImage": `url("https://s3.eu-central-1.amazonaws.com/erasmoose/${this.props.uni._id}.jpg")` }} 
						>	
							<div className="absolute z-1 bottom-2 white tc left-0 right-0">
								<div className="b pt3 f3 f2-l text-shadow">{this.props.uni.name}</div>
								<div className="f4 f3-l pb3 i playfair text-shadow">{this.props.uni.website}</div>
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
												<span className='inside-circle'>{`${setProgProp(_.get(uni,'uni_rating.value',0))}/100`}</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(_.get(uni,'uni_rating.value',0))} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>
											<div className="f7 pv2 ttu b"> 
												<i className="fa fa-globe mr1" aria-hidden="true"></i>
												Country: <span className="b">{uni.country}</span>
											</div>
											<div className="f7 pv2 ttu b">
												<i className="fa fa-university mr1" aria-hidden="true"></i>
												Ranking (Int/Nat): <span className="b">Coming soon</span>
											</div>
											<div className="f7 pv2 ttu b">
												<i className="fa fa-flag mr1" aria-hidden="true"></i>
												Flagship Areas: <span className="b">{getTopProps(uni.main_disciplines)}</span>
											</div>
											<div className="f7 pv2 ttu b">
												<i className="fa fa-language mr1" aria-hidden="true"></i> Languages: <span className="b">{getTopProps(uni.languages)}</span>
											</div>
											<div className="f7 pv2 ttu b">
												<i className="fa fa-eur mr1" aria-hidden="true"></i>
												Tuition Fees: <span className="b">{uni.fees.value ? uni.fees.value + " €" : "coming soon"}</span>
											</div>
											<div className="f7 pv2 ttu b">
												<i className="fa fa-clock-o mr1" aria-hidden="true"></i>
												Weekly Hours of Work: <span className="b">{uni.weekly_hours.value ? round(uni.weekly_hours.value) + " hours" : "coming soon"}</span>
											</div>
										</div>
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr3 pv3 ph3">
											<ProgressBar name="difficulty" value={setProgProp(_.get(uni,'difficulty.value',0))} icon="difficulty"/>
											<ProgressBar name="International Orientation" value={setProgProp(_.get(uni,'int_orientation.value',0))} icon="globe"/>
											<ProgressBar name="Openness" value={setProgProp(_.get(uni,'openness.value',0))} icon="open"/>
											<ProgressBar name="Gender Ratio (Women/Men)" value={_.get(uni,'female_percentage.value',0)} icon="gender"/>
											<ProgressBar name="Research Opportunities" value={setProgProp(_.get(uni,'opportunities.value',0))} icon="research"/>
											<ProgressBar name="Job/Internship Opportunities" value={setProgProp(_.get(uni,'opportunities.value',0))} icon="job"/>
											<ProgressBar name="Organizations and Student Clubs" value={setProgProp(_.get(uni,'clubs.value',0))} icon="club"/>
											<ProgressBar name="Student Parties" value={setProgProp(_.get(uni,'party.value',0))} icon="party"/>
										</div>
									</div>
									<Reviews university_id={uni._id}/>
								</div>
							</TabPanel>	
							<TabPanel className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									{/* City */}
									{/* ---------------------------------- */}
									<div className="f3 b black pt3 tc tl-l">{city.name} City Metrics</div>
									<div className="flex flex-column flex-row-l black">
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr2 pv3 ph3">
											<div className="f4 b circle pb4 flex">
												<span className='inside-circle'>{`${setProgProp(_.get(city,'city_rating.value',0))}/100`}</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(_.get(city,'city_rating.value',0))} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>
											<div className="f5 pv1">Size: <span className="b">coming soon</span></div>
											<div className="f5 pv1">Weather (Winter/Spring): <span className="b">coming soon</span></div>
											<div className="f5 pv1">Sunny Days: <span className="b">coming soon</span></div>
											<div className="f5 pv1 pb2">Monthly Cost: <span className="b">{round(_.get(city,'monthly_cost.value',0))} €/m</span></div>
											<ProgressBar name="Student Friendliness" value={setProgProp(_.get(city,'student_friendliness.value',0))} icon="difficulty"/>
											<ProgressBar name="Travel Options" value={setProgProp(_.get(city,'travel_options.value',0))} icon="plane"/>
											<ProgressBar name="Cultural Offering" value={setProgProp(_.get(city,'culture.value',0))} icon="culture"/>
										</div>
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr2 pv3 ph3">
											<ProgressBar name="Nightlife" value={setProgProp(_.get(city,'nightlife.value',0))} icon="nightlife"/>
											<ProgressBar name="Gastronomy" value={setProgProp(_.get(city,'gastronomy.value',0))} icon="gastronomy"/>
											<ProgressBar name="Sports" value={setProgProp(_.get(city,'sports.value',0))} icon="sports"/>
											<div className="f5 b pt4">Student Cost of life</div>
											<ProgressBar name="Rent" cost={_.get(city,'rent_cost.value',0)} value={setCostProgProp(_.get(city,'rent_cost.value',0), 800)} icon="rent"/>
											<ProgressBar name="Beer in a Pub" cost={_.get(city,'rent_cost.value',0)} value={setCostProgProp(_.get(city,'beer_cost.value',0), 10)} icon="beer"/>
											<ProgressBar name="Coffee" cost={_.get(city,'rent_cost.value',0)} value={setCostProgProp(_.get(city,'coffee_cost.value',0), 10)} icon="cafe"/>
											<ProgressBar name="Kebab" cost={_.get(city,'rent_cost.value',0)} value={setCostProgProp(_.get(city,'kebab_cost.value',0), 15)} icon="burger"/>
											<ProgressBar name="Entry fee Club" cost={_.get(city,'rent_cost.value',0)} value={setCostProgProp(_.get(city,'danceclub_cost.value',0), 30)} icon="music"/>
										</div>
									</div>
									<Reviews city_id={city._id}/>
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
			    		border-top-right-radius: 6px;
			    		border-top-left-radius: 6px;
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
			        width: 100%;
			        height: 100%;
			        overflow-y: scroll;
			        box-sizing: border-box;
			        -webkit-overflow-scrolling: touch;
			      }
			      .modal {
			      	background-color: white;
			      	max-width: 920px;
			      	position: absolute;
			      	z-index: 9997;
			      	background-position: fixed;
			      	box-sizing: border-box;
			      	border-radius: 6px;
			      	min-height: 90vh;
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
			    `}
			  </style>
			</div>
	  );
	}
}
export default Modal;

