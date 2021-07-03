import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaxium = Math.max(...dataPointValues);

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => {
				return (
					<ChartBar
						value={dataPoint.value}
						maxValue={totalMaxium}
						label={dataPoint.label}
						key={dataPoint.label}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
