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
							<div className="absolute z-1 bottom-2 white tc left-0 right-0">
								<div className="b pt3 f2">{this.props.uni.name}</div>
								<div className="f3 pb3 i playfair">{this.props.uni.website}</div>
							</div>	
						</div>
						<div className="flex flex-column tl f7">
							<div className="flex">
								<div className={ addActive(0) + " flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray"}  onClick={() => this._handleTabClick(0)}>
									Overview
								</div>
								<div className={ addActive(1) + " flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray"} onClick={() => this._handleTabClick(1)}>
										Coming Soon
								</div>
								<div className={ addActive(2) + " flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray"} onClick={() => this._handleTabClick(2)}>
									Coming Soon
								</div>
							</div>
							<div className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">
									<div className="black pb2 pt1">
										<div className="f3 b">Overview</div>
										<div className="f4 gray">The main metrics and such</div>
									</div>
									<div className="flex grad-pink modal-card">
										<div className="flex flex-auto flex-column justify-center mt3 mr2 pv3 white">
											<div className="f4 flex justify-center">
													The city
											</div>
											<div className="f6 flex justify-center">
													Thing number one
											</div>
											<div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div>
											<div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div><div className="f6 flex justify-center">
												hgk kjhkjh kljhlk hkljh kljhlkjh ljhlk hkljhl 
											</div>
										</div>
										<div className="flex flex-column justify-center modal-card mt3 ml2 pv3 black">
										</div>
									</div>
									<div className="black pb0 pt3">
										<div className="f3 b">The city</div>
										<div className="f4 gray">The main metrics and such</div>
									</div>
									<div className="flex">
										<div className="flex flex-auto flex-column shadow-3 justify-center modal-card mt3 mr3 pv3 grad-green">
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
										<div className="flex flex-auto flex-column shadow-3 justify-center modal-card mt3 mr2 pv3 grad-purple">
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
										<div className="flex flex-auto flex-column justify-center modal-card mt3 f4 tc items-center ml2 pa4 justify-center black grad-pink">
											Did you attend this university?
											<div className="ma2 mh4 ur-btn tc flex justify-center content-center items-center" onClick={this.props._handleFormClick}> Add Review </div>
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
					<div className="red f2 absolute ph3 right-0 top-0 pointer" onClick={this.props._handleModalCloseClick}>
						x
					</div>
				</div>
			  <style jsx>
			    {`
			    	.modal-card {
			    		border-radius: 12px;
			    		min-height: 250px;
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
			    	.active {
			    		border-color: #F44A4A;
			    		color: #F44A4A;
			    		box-shadow: 0 0 5px #F44A4A;
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