import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';

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
		// this.setState({
		// 	tabIndex: i
		// });
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
				<div className="flex">
					<div className="flex flex-auto flex-column shadow-3 justify-center modal-card mt3 mr3 pv3">
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
					</div>
					<div className="flex flex-auto flex-column shadow-3 justify-center modal-card mt3 ml2 pv3">
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-auto flex-column shadow-3 justify-center modal-card mt3 mr3 pv3">
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
					</div>
					<div className="flex flex-auto flex-column shadow-3 justify-center modal-card mt3 ml2 pv3">
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
						<div className="f4 flex justify-center">
								Thing number one
						</div>
					</div>
				</div>
			</div>,
			<div>
				City (coming soon)
			</div>,
			<div>
				Activities (coming soon)
			</div>
		];
	  return (
			<div 
				className={"backModal fixed z-1 flex content-center justify-center items-center"}
				onClick={this.props._handleModalCloseClick}> 
				<div className={"absolute modal shadow-3 w-100 w-80-l" }>
					<div className="flex tc flex-column">
						<div 
							className="flex bg-img"
							style={{ "backgroundImage": `url("/static/${this.props.uni._id}.jpg")` }} 
						>	
							<div className="absolute z-1 bottom-2 white tc left-0 right-0">
								<div className="b pt3 f2">{this.props.uni.name}</div>
								<div className="f3 pb3 i playfair">{this.props.uni.website}</div>
								<div className="ma2 mh4 ur-btn tc flex justify-center content-center items-center" onClick={this.props._handleFormClick}> Add Review </div>
							</div>	
						</div>
						<div className="flex flex-column tl f7">
							<div className="flex">
								<div className={ addActive(0) + " flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray"}  onClick={() => this._handleTabClick(0)}>
									Overview
								</div>
								<div className={ addActive(1) + " flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray"} onClick={() => this._handleTabClick(1)}>
									City (coming soon)
								</div>
								<div className={ addActive(2) + " flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray"} onClick={() => this._handleTabClick(2)}>
									Activities (coming soon)
								</div>
							</div>
							<div className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									<div className="black pb0 pt3">
										<div className="f3 b">The University</div>
										<div className="f5 gray">The main metrics and such</div>
									</div>
									<div className="flex black">
										<div className="flex flex-1 flex-column justify-center modal-card mt3 mr3 pv3 ph3">
											<div className="progress-wrapper tc justify-center flex pb2">
												<Circle className="pv2 mr3 w-100" percent="10" strokeWidth="5
												" trailWidth="5" strokeColor="#F44A4A" />
												<Circle className="pv2 w-100" percent="10" strokeWidth="5
												" trailWidth="5" strokeColor="#F44A4A" />
											</div>
											<div className="f4 b">City life</div>
											<Line className="flex pv2" percent="67" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="17" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="67" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="17" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
										</div>
										<div className="flex flex-1 flex-column justify-center modal-card mt3 mr2 pv3 ph3">
											<div className="f4 b">Academics</div>
											<Line className="flex pv2" percent="80" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="40" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="67" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f4 b">Social life</div>
											<Line className="flex pv2" percent="17" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="80" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="40" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f4 b">Fees life</div>
											<Line className="flex pv2" percent="67" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<Line className="flex pv2" percent="17" strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
										</div>
									</div>
									<div className="black pb0 pt3">
										<div className="f3 b">Latest Reviews</div>
										<div className="f5 gray">The main metrics and such</div>
									</div>
									<div className="flex black">
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 mr2 pv3 grad-green relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 mr2 pv3 grad-blue relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 ml2 pv3 grad-purple relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
									</div>
								</div>
							</div>					
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
					<div className="red f2 absolute ph3 right-0 top-0 pointer close" onClick={this.props._handleModalCloseClick}>
						x
					</div>
				</div>
			  <style jsx>
			    {`
			    	.modal-card {
			    		border-radius: 12px;
			    	}
			    	.review {
			    		width: 275px;
			    		height: 250px;
			    	}
			    	.grad-blue {
			    		background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
			    	}
			    	.grad-pink {
			    		background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
			    	}
			    	.grad-purple {
			    		background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
			    	}
			    	.grad-green {
			    		background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
			    	}
			    	.grad-orange {
				    	background-image: linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);
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