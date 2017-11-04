import PostUpvoter from './PostUpvoter'
import { Line, Circle } from 'rc-progress';

export default (props) => (
	<div 
		className="ma3 shadow-4 bg-white flex flex-column tl ur-card relative white" 
		style={{ "backgroundImage": `url("/static/${props.uni._id}.jpg")` }} 
		data-index={props.index}
		onClick={props._handleCardClick}
	>
		<div className="flex-column flex card-front pt3 flex-grow-1">
		  <div className="flex flex-column text relative pa2 ph3 justify-between">
		  	<div className="flex flex-column ph2">
			    <img 
			    	className="ur-uni-logo"
			    	src={`https://logo.clearbit.com/${props.uni.website}`}
			    	onError={(e)=>{ e.target.src=`https://ui-avatars.com/api/?name=${props.uni.name.split(" ").join("+")}&color=fff&background=F44A4A&font-size=0.4`}}
			    />
			    <div className="pv1 ttu white dn">
			    	<span className="tag b tagged mr1"> tag1 </span><span className="tag b tagged mr1"> tag2 </span>
			    </div>
			    <div className="pt3 f2 fw7">
			      {props.uni.name}
			    </div>
		  	</div>
		    <div className="f5 pt1 ph2 pb1 b">
		      <i className="fa fa-map-marker trans-gray" aria-hidden="true"></i> {props.uni.country}
		    </div>
		  </div>
		  <div className="ph3 pt1 pb1 flex items-end bottom items-center">
		    <div 
		    	style={{ "flex": 1 }} 
		    	className="b tl f7 "
		    >
      		<div className="star-ratings-css mh1">
  	    	  <div className="star-ratings-css-top" style={{width: "20%"}}>
  	    	  	<span>★</span>
  	    	  	<span>★</span>
  	    	  	<span>★</span>
  	    	  	<span>★</span>
  	    	  	<span>★</span>
  	    	  </div>
  	    	  <div className="star-ratings-css-bottom">
  		    	  <span>★</span>
  		    	  <span>★</span>
  		    	  <span>★</span>
  		    	  <span>★</span>
  		    	  <span>★</span>
  	    		</div>
	  	    	<span className="score absolute">(2.1)</span>
  	    	</div>
		    </div>
		    <div 
		    	style={{ "flex": 1 }} 
		      className="b tr f6 flex justify-end"
		     >
		     	<PostUpvoter _id={props.uni._id} votes={props.uni.votes} />
		   </div>
		  </div>
		</div>
		<div className="flex-column pt1 dn card-back z-1">
			<div className="pv2 ph4 flex flex-column items-center">
				<div className="progress-wrapper tc pb2">
					<span className='progress-title f4 b'>{"67%"}</span>
					<Circle className="w-60 pv2 m0a" percent="10" strokeWidth="5
					" trailWidth="5" strokeColor="#F44A4A" />
				</div>
				<Line className="flex pv2" percent="80" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
				<Line className="flex pv2" percent="40" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
				<Line className="flex pv2" percent="67" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
				<Line className="flex pv2" percent="17" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
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
	    	.ur-card:hover {
	    		justify-content: center;	    		
	    	}
	    	.ur-card:hover .card-front {
	    		display: none;
	    	}
	    	.ur-card:hover .card-back {
	    		display: flex;
	    	}
	    	.score {
	    		top: 0;
	    		right: -36px;
	    		color: #F44A4A;
	    	}
	    	.tag {
	    		padding: 2px 5px;
	    		font-size: 8px;
	    	}
	      .ur-card {
	        height: 315px;
	        width: 285px;
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
	      .ur-card:hover::before {
	      	background-color: rgba(0,0,0,0.6);
	      }
	      .star-ratings-css {
	        unicode-bidi: bidi-override;
	        color: #c5c5c5;
	        font-size: 14px;
	        height: 14px;
	        width: 75px;
	        position: relative;
	        padding: 0;
	      }
	      .star-ratings-css-top {
	        color: #F7CA18;
	        padding: 0;
	        position: absolute;
	        z-index: 1;
	        display: block;
	        top: 0;
	        left: 0;
	        overflow: hidden;
	      }
	      .star-ratings-css-bottom {
	        padding: 0;
	        display: block;
	        z-index: 0;
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
	      .ur-uni-logo {
	      	width: 45px;
	  	    border-radius: 50%;
	  	    // display:none;
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