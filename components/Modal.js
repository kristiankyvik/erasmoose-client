import ReactDOM from 'react-dom';

class Modal extends React.Component {
	constructor(props) {
	  super(props);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this._handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this._handleClick, false);
	}

	_handleClick = (e) => {
		// const domNode = ReactDOM.findDOMNode(this);
		// console.log(domNode.find(".modal"));
		// console.log("hanfldee");
		// if ((!domNode || !domNode.contains(e.target))) {
		// 	console.log("is utside");
		// }
	}

	render() {
		if (!this.props.showModal || !this.props.uni) {
			return null;
		} 
	  return (
			<div 
				className={"backModal fixed z-1 flex content-center justify-center items-center"}
			> 
				<div className={"relative modal vh-100 vh-75-l w-100 w-90-l flex shadow-3" }>
					<div className="flex tc flex-column flex-row-l items-stretch-l">

						<div 
							className="flex flex-4 bg-img"
							style={{ "backgroundImage": `url("/static/${this.props.uni._id}.jpg")` }} 
						>
						
						</div>
						<div className="flex flex-5 flex-column pa4 tl f7">
							<div className="f3 b tc">{this.props.uni.name}</div>
							<div className="f6 pb3 i playfair tc">{this.props.uni.website}</div>
							<p> 
								Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</p> 
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
							</p> 
							<div className="bb" style={{ "borderColor": "#dce0e0" }}></div>

							<div className="flex flex-column pv2">
								<div className="flex pv2">
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-map-marker flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Barcelona, Spain <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-map-marker flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Acamedics <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
								</div>
								<div className="flex pv2">
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-building flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Infraestructure <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-futbol-o flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Sports <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
								</div>
								<div className="flex pv2">
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-balance-scale flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Gender ratio <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-beer flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Beer Index <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
								</div>			
							</div>

							<div className="bb" style={{ "borderColor": "#dce0e0" }}></div>
							<div className="flex flex-column pv2">
								<div className="flex pv2">
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-money flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Cost of living <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-sun-o flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Weather <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
								</div>
								<div className="flex pv2">
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-suitcase flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Travel Opportunities <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-tint flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Tinder Ecosystem <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
								</div>
								<div className="flex pv2">
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-clock-o flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Work Load <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
									<div className="flex w-100 w-50-m data-row">
										<i className="fa fa-language flex w-10" aria-hidden="true"></i>
										<div className="flex w-80">Langauges <span className="b pl2">4.5</span></div><div className="flex w-10 pr4"><i className="fa fa-pencil hidden pointer" aria-hidden="true"></i></div> 
									</div>
								</div>								
							</div>
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
			    	.hidden {
			    		display: none;
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
			    `}
			  </style>
			</div>
	  );
	}
}
export default Modal;