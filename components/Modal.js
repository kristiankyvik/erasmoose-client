import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TypeformButton from '../components/TypeformButton'
import ModalUni from './ModalUni'
import ModalCity from './ModalCity'

const _ = require('lodash'); //get lodash library

class Modal extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			tabIndex: 0,
	  };
	}

	componentDidMount() {
		document.addEventListener('mousedown', this._handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this._handleClick, false);
	}

	render() {
		const { uni, rankingUni, rankingCity } = this.props;
		const city = uni.city;
		const i = this.state.tabIndex;

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
								<ModalUni
									uni={uni}
									rankingUni={rankingUni}
								/>
							</TabPanel>
							<TabPanel className="flex flex-auto">
								<ModalCity
									cityRating={uni.cityRating}
									city={city}
									rankingCity={rankingCity}
								/>
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

