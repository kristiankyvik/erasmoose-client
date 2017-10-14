import PostUpvoter from './PostUpvoter'

export default (props) => (
	<div 
		className="ma2 shadow-4 bg-white flex flex-column tc ur-card" 
		style={{ "backgroundImage": `url("https://source.unsplash.com/254x156/?${props.uni.url}&city&sig=${props.uni._id}")` }} 
		data-index={props.index}
		onClick={props._handleCardClick}
	>
		<div className="pt2 ph2 flex top ph2">
		  <div 
		  	style={{ "flex": 1 }} 
		  	className="b tl f7 robot0"
		  >
		    <span >UniRank: </span>{props.uni.rank} {1}
		  </div>
		  <div 
		  	style={{ "flex": 1 }} 
		  	className="b tr f7 robot0"
		  >
		    <span >Rank: </span>{props.uni.times_rank}{3}
		  </div>
		</div>

		<div className="flex-column flex bottom pt1">
		  <div className="flex flex-column text pb3 ph2 relative">
		    <img className="ur-uni-logo absolute" src={`https://logo.clearbit.com/${props.uni.website ? props.uni.website : "uu.nl" }`} />
		    <div className="pv1 f6 fw7">
		      {props.uni.name}
		    </div>
		    <div className="robot0 f6 o-80">
		      {props.uni.country}
		    </div>
		  </div>
		  <div className="pv2 ph2 flex items-end">
		    <div 
		    	style={{ "flex": 1 }} 
		    	className="b tl f7 robot0"
		    >
		      <PostUpvoter _id={props.uni._id} votes={props.uni.votes} />
		    </div>
		    <a 
		    	style={{ "flex": 1 }} 
		    	className="b link tr white f7 robot0 underline"
		    	href={props.uni.website}
		    >
		   	visit site
		    </a>
		  </div>
		</div>


	  <style jsx>
	    {`
	      .ur-card {
	        height: 156px;
	        width: 254px;
	        background-size: cover;
	        color: white;
	        -webkit-font-smoothing: antialiased;
	        font-smoothing: antialiased;
	        text-rendering: optimizeLegibility;
	        cursor: pointer;
	      }
	      .top {
	        flex: 1;
	        background: -webkit-linear-gradient( top , rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 50%, transparent 100%);
	        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 50%, transparent 100%);
	      }
	      .text {
	        font-size: 1.5rem;
	        flex: 2;
	      }
	      .bottom {
	        flex: 1;
					background: -webkit-linear-gradient( bottom , rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 70%, transparent 100%);
					background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) 70%, transparent 100%);
	      }
	      .playfair {
	        font-family: 'Playfair Display', serif;
	        font-weight: 600;
	      }
	      .ur-uni-logo {
	        width: 30px;
	        top: -45px;
	        left: 50%;
	        margin-left:-15px;
	        border-radius: 50%;
	        border: 2px white solid;
	      }
	    `}
	  </style>
	</div>
)