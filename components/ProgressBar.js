import { Line, Circle } from 'rc-progress';

export default ({ name, value, icon, cost }) => (
	<div className="flex items-stretch pv1">
		<div className="flex items-center justify-center">
			<div className="flex icon-wrapper br-100 pa1 items-center justify-center">
				<img src={`./static/icons/${icon}.svg`} className="w2 h2" />
			</div>
		</div>
		<div className="flex flex-column self-stretch flex-1 justify-center pl2">
			<div className="flex f7 b pt2 ttu pb1 justify-between">
				<div className="flex">
					{name}:
				</div>
				<div className="flex">
					{cost !== undefined ? cost +  " €" : value + " %"}
				</div>
			</div>
			<Line className="flex pv1" percent={value} strokeWidth="3" trailWidth="3" strokeColor="#25d6c9" />
		</div>
		<style jsx>{`
			.icon-wrapper {
				// background-color: #25d6c9;
			}
			.flex-1 {
				flex: 1;
			}
		`}</style>
	</div>
)
