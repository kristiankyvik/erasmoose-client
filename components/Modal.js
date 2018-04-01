import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Circle } from 'rc-progress';
import TypeformButton from '../components/TypeformButton'
import ProgressBar from '../components/ProgressBar'
import Reviews from '../components/Reviews'
import ModalInfoDiv from '../components/ModalInfoDiv'


const { rankingUniDictionary, rankingCityDictionary} = require('./UniListFilterQuery');

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

const spellReview = (x) => {
	return x > 1 ? 'reviews' : 'review';
}

const getRankingDescription = (ranking, rankingDictionary) => {
	let str = "The score is derived from selected preferences of: "

	ranking.forEach((preference, idx, array) => {
		let nameOfPreference = _.get(rankingDictionary, preference,"");
		let isLastItemOrNotDefined = idx === array.length - 1 || nameOfPreference === "";
		str += isLastItemOrNotDefined ?  nameOfPreference + '' : nameOfPreference + ', ';
	});
	return str;
}

class Modal extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			tabIndex: 0,
			temperature: "",
			weatherDescription: ""
	  };
	}

	componentDidMount() {
		document.addEventListener('mousedown', this._handleClick, false);
	}

	componentWillMount() {
		const city = _.get(this.props,'uni.city.name')
		this.getWeatherForecast(city)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this._handleClick, false);
	}

	getWeatherForecast(city) {
		var xhr = new XMLHttpRequest();
		const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=796d6ae51449b3531c9a4df53a4f6413";
		xhr.open("GET", url , true);
		xhr.send();
		
		var self = this

		xhr.onreadystatechange = function () {
			if (xhr.readyState == XMLHttpRequest.DONE) {

				const weatherData = JSON.parse(xhr.responseText);
				const transformKelvinToCelsius = (tempK) => (Math.round(tempK - 273.15));
				const temperature = transformKelvinToCelsius(_.get(weatherData, 'main.temp')) || "No data";
				const weatherDescription = _.get(weatherData, 'weather[0].main', "No description");

				self.setState({ temperature: temperature });
				self.setState({ weatherDescription: weatherDescription });
			}
		}
    
	}

	render() {
		const { uni } = this.props;
		const city = uni.city;
		const i = this.state.tabIndex;
		const rankingUni = this.props.rankingUni
		const rankingCity = this.props.rankingCity

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
								<Tab className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu light-red">University</Tab>
								<Tab className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu light-red">City</Tab>
								<Tab disabled className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">Activities</Tab>
							</TabList>
							<TabPanel className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									{/* Uni */}
									{/* ---------------------------------- */}
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
												<span className='inside-circle'>{`${setProgProp(uni.cityRating)}/100`}</span>
												<span className='info-wrap next-circle'>
													<span className="fa fa-info-circle"></span>
													<p className='info-description'> {getRankingDescription(rankingCity, rankingCityDictionary)} </p>
												</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(uni.cityRating)} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>

											<ModalInfoDiv name='Size:' divProperty='coming soon' srcName='./static/icons/population.svg' />
											<ModalInfoDiv name='Weather:' divProperty={this.state.temperature + ' °C  / ' + this.state.weatherDescription} srcName='./static/icons/temperature.svg' />
											<ModalInfoDiv name='Monthly Cost:' divProperty={round(_.get(city, 'monthly_cost.value', 0)) + '€/m'} srcName='./static/icons/bill.svg' />
											
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

