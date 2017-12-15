import { Line, Circle } from 'rc-progress';
import Img from 'react-image'
const _ = require('lodash'); //get lodash library

const UniLogoFallback = (
	<div 
		className="logo-fallback"
		style={{ height: "45px", width: "45px", borderRadius: "50%", backgroundColor: "gray" }}
	>
	</div>
);

const round = (v) =>  {
	if (v) {
		return Number((v).toFixed(0));		
	}
}

const setProgProp = (v) => {
	if (v) {
		return round(v/5 * 100);
	}
	return 0
}

const getStars = (v) => {
	const fullStars = Math.floor(v);
	const leftOverStars = v - Math.floor(v);
	const starSettings = {
		full: fullStars + (leftOverStars > 0.75 ? 1 : 0), 
		half: (leftOverStars <= 0.75) && (leftOverStars > 0.25) ? 1 : 0
	};

	let stars = [];
	for(let i= 0; i < starSettings.full; i++) {
	  stars.push(<i className="fa fa-star" aria-hidden="true"></i>);
	}

	starSettings.half ? stars.push(<i className="fa fa-star-half-o" aria-hidden="true"></i>) : null;

	for(let i= 0; i < 5 - starSettings.full - starSettings.half; i++) {
	  stars.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
	}

	return stars;
};

export default class Card extends React.Component {
	constructor(props) {
	  super(props);
	}
	render() {
		const { uni } = this.props;
		return (
			<div 
				className="ma2 shadow-4 bg-white flex flex-column tl ur-card relative white" 
				style={{ "backgroundImage": `url("https://s3.eu-central-1.amazonaws.com/erasmoose/${uni._id}.jpg")` }} 
				data-index={this.props.index}
				onClick={this.props._handleCardClick}
			>
				<div className="flex-column flex card-front pt2 flex-grow-1">
				  <div className="flex flex-column text relative pa2 ph2 justify-between">
				  	<div className="flex flex-column ph2">
				  		<div className="ur-uni-logo">
					  		<Img 
					  			src={[
					  		    `https://logo.clearbit.com/${uni.website}`,
					  		    `https://ui-avatars.com/api/?name=${uni.name.split(" ").join("+")}&color=fff&background=F44A4A&length=2&font-size=0.43`
					  		 ]}
					  		 loader={UniLogoFallback}
					  		 style={{ width: "40px", borderRadius: "50%" }}
					  		 />	
				  		</div>
					    <div className="pv1 ttu white dn">
					    	<span className="tag b tagged mr1"> tag1 </span><span className="tag b tagged mr1"> tag2 </span>
					    </div>
					    <div className="pt3 f5 f4-m f3-l fw7 text-shadow">
					      {uni.name}
					    </div>
				  	</div>
				    <div className="f7 f6-m f5-l pt1 ph2 pb1 b text-shadow">
				      <i className="fa fa-map-marker trans-gray" aria-hidden="true"></i> {uni.city_name}
				    </div>
				  </div>
				  <div className="ph2 pv2 flex items-end bottom items-center">
				    <div 
				    	style={{ "flex": 1 }} 
				    	className="b tl f7 z-1"
				    >
		      		<div className="yellow">
								{getStars(uni.overallRating)}
								<span className="score ml1">({_.get(uni,'review_count',0)})</span>
		  	    	</div>
				    </div>
				    <div 
				    	style={{ "flex": 1 }} 
				      className="b tr f6 flex justify-end z-1"
				     >
				     	<i className="fa fa-hashtag mr1" aria-hidden="true"></i>{this.props.index}
				   </div>
				  </div>
				</div>
				<div className="flex-column pt1 dn card-back absolute z-1">
					<div className="pv2 ph4 flex flex-column items-center">
						<div className="progress-wrapper tc pb2">
							<span className='progress-title f7 f5-m b'>{`${setProgProp(uni.overallRating)}/100`}</span>
							<Circle className="w-60 pv2 m0a" percent={setProgProp(uni.overallRating)} strokeWidth="5
							" trailWidth="5" strokeColor="#F44A4A" />
						</div>
						<div className="b f7 f6-m f5-l">
							{_.get(uni, 'review_count', 0) ? _.get(uni, 'review_count', 0) + " Reviews" : " No Reviews" } 
						</div>
					</div>
				</div>

			  <style jsx>
			    {`
			    	m0a {
			    		margin: 0 auto;
			    	}
			    	.trans-gray {
			    		color: rgba(255,255,255,0.6);
			    	}
			    	.progress-title {
			    	  position: absolute;
			    	  top: 50%;
			    	  left: 50%;
			    	  transform: translate(-50%, -50%);
			    	}
			    	.progress-wrapper {
			    		position: relative;
			    	}
			    	.score {
			    		top: 0;
			    		right: -20px;
			    		color: #fff;
			    	}
			    	.tag {
			    		padding: 2px 5px;
			    		font-size: 8px;
			    	}
			      .ur-uni-logo {
			  	    display: none;
			      }
			      .ur-card {
			      	min-height: 140px;
			        width: 40%;
			        background-size: cover;
			        -webkit-font-smoothing: antialiased;
			        font-smoothing: antialiased;
			        text-rendering: optimizeLegibility;
			        cursor: pointer;
			        border-radius: 10px;
			      }
			      .ur-card::before {
			      	position: absolute;
			      	top: 0;
			      	right: 0;
			      	left: 0;
			      	bottom: 0;
			      	background-color: rgba(0,0,0,0.3);
			      	content: "";
			      	border-radius: 10px;
			      }

			    	@media only screen and (min-width : 480px) {
			    		.ur-card {
				    		width: 215px;
				    		min-height: 215px;
							}
					    .ur-uni-logo {
						    display: block;
					    }
			    	}
			      .star-ratings-css {
			        
			      }
			      .top {
			        flex: 1;
			        color: white;
			        background: -webkit-linear-gradient( top , rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 50%, transparent 100%);
			        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 50%, transparent 100%);
			      }
			      .bottom {
			      	border-bottom-right-radius: 12px;
			      	border-bottom-left-radius:12px;
			      	background-color: rgba(0, 0, 0, 0.21);
			      }
			      .text {
			        font-size: 1.5rem;
			        flex: 3;
			      }
			      .diagonal {
			      	width: 0;
			      	height: 0;
			      	border-bottom: 12px solid white;
			      	border-left: 230px solid transparent;
			      	bottom: 0;
			      	left: 0;
			      	right: 0;
			      	display: none;
			      }
			      .playfair {
			        font-family: 'Playfair Display', serif;
			        font-weight: 600;
			      }
			      .tagged {
			      	background-color: #22BAD9;
			      	border-radius: 15px;
			      	font-size: 10px;
			      }
			      .flex-grow-1 { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; }
			    `}
			  </style>
			</div>
		)

	}
	
} 
