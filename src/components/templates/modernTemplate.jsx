import React, { useRef } from 'react';
import './modernTemplate.css';

export const ModernTemplate = React.forwardRef((props, ref) => {
	console.log(props.info.fname[0], ' is first letter');
	return (
		<div className="printWidth" ref={ref}>
			<div className="resumeMargin"></div>

			{/*************LEFT COLUMN************/}
			<div className="leftColumn">
				<div className="abr" style={{ fontSize: props.abr }}>
					{props.info.fname[0]}
					{props.info.lname[0]}
				</div>
			</div>

			{/*************RIGHT COLUMN************/}

			<div className="rightColumn">
				<div className="nameDisplay" style={{ fontSize: props.name }}>
					{props.info.fname} {props.info.lname}
				</div>

				<div>
					<div className="summary">Summmary</div>
				</div>
				<div className="summaryDesc" style={{ fontSize: props.sumSize }}>
					{props.summary}
				</div>
			</div>
		</div>
	);
});
