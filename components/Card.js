import PostUpvoter from './PostUpvoter'

export default (props) => (
	<div 
		className="ma3 shadow-4 bg-white flex flex-column tl ur-card" 
		
		data-index={props.index}
		onClick={props._handleCardClick}
	>
		<div
			className="pa3 flex top relative"
			style={{ "backgroundImage": `url("/static/${props.uni._id}.jpg")` }} 
		>
		  <div className="diagonal absolute"></div>
		  <div 
		  	style={{ "flex": 1 }} 
		  	className="b tl robot0"
		  >
		    <span className="rank pa1 ttu"> { props.uni.country }</span>
		  </div>
		  <div 
		  	style={{ "flex": 1 }} 
		  	className="b tr f7 robot0"
		  >
		  </div>
		</div>

		<div className="flex-column flex bottom pt1">
			<div id="topes"></div>
		  <div className="flex flex-column text pb1 pt1 ph3 relative">
		    <img className="ur-uni-logo absolute" src={`https://logo.clearbit.com/${props.uni.website ? props.uni.website : "uu.nl" }`} />
		    <div className="pv1 f7 ttu white">
		    	<span className="rank b tagged mr1 ph1"> tag1 </span><span className="rank b tagged mr1 ph1"> tag2 </span>
		    </div>
		    <div className="pt1 f6 fw7">
		      {props.uni.name}
		    </div>
		    <div className="robot0 f7 o-80 grayish pt1">
		      <i className="fa fa-map-marker" aria-hidden="true"></i> {props.uni.country}
		    </div>
		  </div>
		  <div className="mt1 separator mh2"></div>
		  <div className="pb3 pt2 ph3 flex items-end">
		    <div 
		    	style={{ "flex": 1 }} 
		    	className="b tl f7 robot0"
		    >
      		<div className="star-ratings-css">
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
		      className="b tr f7 robot0 flex justify-end"
		     >
		     	<PostUpvoter _id={props.uni._id} votes={props.uni.votes} />
		   </div>
		  </div>
		</div>


	  <style jsx>
	    {`
	    	.separator {
	    		border-bottom: 1px solid #D0D8E9; 
	    	}
	    	.grayish {
	    		color:#7E98DC;
	    	}
	    	.score {
	    		top: 0;
	    		right: -22px;
	    		color: #F44A4A;
	    	}
	      .ur-card {
	        height: 260px;
	        width: 230px;
	        background-size: cover;
	        -webkit-font-smoothing: antialiased;
	        font-smoothing: antialiased;
	        text-rendering: optimizeLegibility;
	        cursor: pointer;
	      }
	      .star-ratings-css {
	        unicode-bidi: bidi-override;
	        color: #c5c5c5;
	        font-size: 13px;
	        height: 15px;
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
	      .rank {
	      	background-color: #ED6863;
	      	font-size: 9px;
	      }
	      .top {
	        flex: 2;
	        color: white;
	        background: -webkit-linear-gradient( top , rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 50%, transparent 100%);
	        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 50%, transparent 100%);
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
	      }
	      .bottom {
	        flex: 3;
					// background: -webkit-linear-gradient( bottom , rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 70%, transparent 100%);
					// background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 70%, transparent 100%);
	      }
	      .playfair {
	        font-family: 'Playfair Display', serif;
	        font-weight: 600;
	      }
	      .ur-uni-logo {
	      	width: 36px;
	      	top: -34px;
	      	right: 10%;
	        margin-left:-15px;
	        border-radius: 50%;
	        border: 2px white solid;
	      }
	      .tagged {
	      	background-color: #22BAD9;
	      	border-radius: 20px;
	      	font-size: 10px;
	      }
	    `}
	  </style>
	</div>
)