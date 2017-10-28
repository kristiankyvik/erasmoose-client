import ReactDOM from 'react-dom';

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

	_handleTabClick = (i, e) => {
		this.setState({
			tabIndex: i
		});
	}

	render() {
		if (!this.props.showModal || !this.props.uni) {
			return null;
		}

		const tags = [
			"happy",
			"relax",
			"urban",
			"beach"
			].map(t => <div className="tag ma2 flex f4" key={t}> <img src={`https://png.icons8.com/${t}/dotty/24`} title="Location" width="24" height="24"/> {t} </div> ); 

		const i = this.state.tabIndex;
		const addActive = (n) => { 
			const ret = i === n ? "active" : "nothing";
			return ret;
		};
		const cards = [
			<div className="flex flex-auto pv3 ph4 flex-column">
				<div className="flex f4 shadow-3 bg-white pa3">
					<div className="flex justify-center flex-auto pa3">
						<img src="https://png.icons8.com/numeric/dotty/24" title="numeric" width="24" height="24"/> Unirank
					</div>
					<div className= "flex justify-center flex-auto pa3">
						<img src="https://png.icons8.com/location/dotty/24" title="Location" width="24" height="24"/> Location
					</div>
					<div className="flex justify-center flex-auto pa3">
						<img src="https://png.icons8.com/sun/dotty/24" title="sun" width="24" height="24"/> Weather
					</div>
				</div>
				<div className="flex justify-center pv3 f4 shadow-3 bg-white mt2">
					{tags}
				</div>
				<div className="flex justify-center pv3 f4 i shadow-3 bg-white mt2">
					"a place to find yourself"
				</div>
				<div className="flex">
					<div className="flex flex-auto flex-column shadow-3 bg-white mt2 mr1 pv3">
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
					</div>
					<div className="flex flex-auto flex-column shadow-3 bg-white mt2 ml1 pv3">
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
						<div className="f4 flex justify-center">
							<img className="mr1" src="https://png.icons8.com/medal/dotty/24" title="Medal" width="24" height="24"/>
								Thing number one
						</div>
					</div>
				</div>
			</div>,
			<div>
				coming soon 
			</div>,
			<div>
				coming soon
			</div>
		];
	  return (
			<div className={"backModal fixed z-1 flex content-center justify-center items-center"}> 
				<div className={"absolute modal shadow-3 w-100 w-80-l" }>
					<div className="flex tc flex-column">
						<div 
							className="flex bg-img"
							style={{ "backgroundImage": `url("/static/${this.props.uni._id}.jpg")` }} 
						>		
						</div>
						<div className="flex flex-column tl f7">
							<div className="flex">
								<div className={ addActive(0) + " flex justify-center flex-auto f5 z-1 pv3 bw1 b--light-gray bg-oj pointer bb ttu light-gray"}  onClick={() => this._handleTabClick(0)}>
									Overview
								</div>
								<div className={ addActive(1) + " flex justify-center flex-auto f5 z-1 pv3 bw1 b--light-gray bg-oj pointer bb ttu light-gray"} onClick={() => this._handleTabClick(1)}>
										Coming Soon
								</div>
								<div className={ addActive(2) + " flex justify-center flex-auto f5 z-1 pv3 bw1 b--light-gray bg-oj pointer bb ttu light-gray"} onClick={() => this._handleTabClick(2)}>
									Coming Soon
								</div>
							</div>
							<div className="f3 b tc pt4">{this.props.uni.name}</div>
							<div className="f6 pb3 i playfair tc">{this.props.uni.website}</div>
							<div className="flex flex-auto">
								{cards[this.state.tabIndex]}
							</div>
							<div className="ma2 ur-btn tc justify-center content-center items-center" onClick={this.props._handleFormClick}> Add Review </div>						
						</div>


						<div className="controls absolute flex f1 dh db-l">
							<div className="flex left z-0">
								<i className="fa fa-angle-left z-1" aria-hidden="true" onClick={this.props._handleModalLeftClick}></i>
							</div>
							<div className="flex right justify-end f1 z-0" >
								<i className="fa fa-angle-right z-1" aria-hidden="true" onClick={this.props._handleModalRightClick}></i>
							</div>

						</div>
					</div>
					<div className="red f2 absolute ph3 right-0 top-0 pointer" onClick={this.props._handleModalCloseClick}>
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
			    	.active {
			    		border-color: #F44A4A;
			    		color: #F44A4A;
			    	}
			    	.bg-oj {
			    		background-color: #ED6863;
			    		color: white;
			    	}
			    	.data-row:hover .hidden {
			    		display: flex;
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
			    		min-height: 40vh;
			    		border-top-right-radius: 6px;
			    		border-top-left-radius: 6px;
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
			      	background-color: #fbfbfb;
			      	max-width: 920px;
			      	position: absolute;
			      	z-index: 9997;
			      	top: 20px;
			      	background-position: fixed;
			      	box-sizing: border-box;
			      	border-radius: 6px;
			      	min-height: 90vh;
			      	margin-bottom: 20px;
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