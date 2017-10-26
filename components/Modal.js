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
			].map(t => <div classaName="tag ma2 flex f4"> <img src={`https://png.icons8.com/${t}/dotty/24`} title="Location" width="24" height="24"/> {t} </div> ); 

		const i = this.state.tabIndex;
		const addActive = (n) => { 
			const ret = i === n ? "active" : "nothing";
			return ret;
		};
		const cards = [
			<div className="flex flex-auto pa2 flex-column">
				<div className="flex bb bt b--light-gray bw1 f4">
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
				<div className="flex justify-center pv3 f4">
					{tags}
				</div>
				<div className="bb b--light-gray bw1"></div>
				<div className="flex justify-center pv3 f4 i">
					"a place to find yourself"
				</div>
				<div className="bb b--light-gray bw1"></div>
				<div className="flex pa3">
					<div className="flex flex-auto flex-column">
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
					<div className="flex flex-auto flex-column">
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
			<div 
				className={"backModal fixed z-1 flex content-center justify-center items-center"}
			> 
				<div className={"relative modal vh-100 vh-75-l w-100 w-90-l flex shadow-3" }>
					<div className="flex tc flex-column flex-row-l items-stretch-l stretch">
							<div 
								className="flex flex-4 bg-img"
								style={{ "backgroundImage": `url("/static/${this.props.uni._id}.jpg")` }} 
							>		
							</div>
							<div className="flex flex-5 flex-column pa3 tl f7">
								<div className="flex">
									<div className={ addActive(0) + " flex justify-center flex-auto pv2 bw1 b--light-gray pointer bb ttu light-gray"}  onClick={() => this._handleTabClick(0)}>
										Overview
									</div>
									<div className={ addActive(1) + " flex justify-center flex-auto pv2 bw1 b--light-gray pointer bb ttu light-gray"} onClick={() => this._handleTabClick(1)}>
											Coming Soon
									</div>
									<div className={ addActive(2) + " flex justify-center flex-auto pv2 bw1 b--light-gray pointer bb ttu light-gray"} onClick={() => this._handleTabClick(2)}>
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


						<div className="controls absolute flex f1">
							<div className="flex left z-0">
								<i className="fa fa-angle-left z-1" aria-hidden="true" onClick={this.props._handleModalLeftClick}></i>
							</div>
							<div className="flex right justify-end f1 z-0" >
								<i className="fa fa-angle-right z-1" aria-hidden="true" onClick={this.props._handleModalRightClick}></i>
							</div>

						</div>
					</div>
					<div className="red f2 absolute ph3 right-0 pointer" onClick={this.props._handleModalCloseClick}>
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
			    	}
			      .backModal {
			        left: 0;
			        right: 0;
			        top: 0;
			        bottom: 0;
			        margin: 0 auto;
			      }
			      .modal {
			      	background-color: white;
			      	max-height: 560px;
			      	max-width: 900px;
			      }
			      .controls {
			      	left: 0;
			      	right: 0;
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