import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Circle } from 'rc-progress';
import ProgressBar from '../components/ProgressBar'
import Reviews from '../components/Reviews'
import ModalInfoDiv from '../components/ModalInfoDiv'

const _ = require('lodash'); //get lodash library
const { round, setProgProp, setCostProgProp, showProps, getTopProps, spellReview, getRankingDescription } = require('./ModalUtils');
const { rankingCityDictionary } = require('./UniListQueryUtils');

export default class ModalCity extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			temperature: "",
			weatherDescription: ""
		};
	}

	componentWillMount() {
		const city = _.get(this.props, 'city.name')
		this.getWeatherForecast(city)
	}
	
	getWeatherForecast(city) {
		var xhr = new XMLHttpRequest();
		const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=796d6ae51449b3531c9a4df53a4f6413";
		xhr.open("GET", url, true);
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

		const { city, cityRating, rankingCity } = this.props;

    return (
				<div className="flex flex-auto pv4 ph4 flex-column white">
					<div className="f3 b black pt3 tc tl-l">{this.props.loading ? null : city.name} City Metrics</div>
					<div className="flex flex-column flex-row-l black">
						<div className="flex flex-1 flex-column justify-end modal-card mt3 mr2 pv3 ph3">
							<div className="f4 b circle pb4 flex">
								<span className='inside-circle'>{`${setProgProp(cityRating)}/100`}</span>
								<span className='info-wrap next-circle'>
									<span className="fa fa-info-circle"></span>
									<p className='info-description'> {getRankingDescription(rankingCity, rankingCityDictionary)} </p>
								</span>
								<Circle className="pv2 mr3 w-100" percent={setProgProp(cityRating)} strokeWidth="5
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
					{/* Reviews should not take {uni} as props -> but only the city itself */}
					{/* <Reviews uni={uni} city_id={this.props.loading ? null : city._id}/> */}
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