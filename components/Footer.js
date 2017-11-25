import TypeformButton from '../components/TypeformButton'
import ReviewCounter from './ReviewCounter' 


export default () => (
  <div className="flex items-stretch justify-around ph5 pt6 pb5">
	  <div className="flex max pa2">
	  	<div className="flex items-center ph4">
	  		<div className="tc">
		  		<div className="f6">Built with: </div>
		  		<span className="b f6">React, Next.js, Graphql</span>
	  		</div>
	  	</div>
	  	<div className="flex items-center ph2 ph4-l">
	  		<div className="tc">
		  		Made with <i className="fa fa-heart pink" aria-hidden="true"></i> in Aachen, Germany
	  		</div>
				<ReviewCounter />
	  	</div>
			
	  </div>
  </div>
)



