import React, { useRef } from 'react';
import './modernTemplate.css';

export const ModernTemplate = React.forwardRef((props, ref) => {
	console.log(props.info.fname[0], ' is first letter');
	return (
		<div className="printWidth" ref={ref}>
			<div className="resumeMargin"></div>
			<div className="abr">
				{props.info.fname[0]}
				{props.info.lname[0]}
			</div>
			<div className="nameDisplay">
				{props.info.fname} {props.info.lname}
			</div>
		</div>
	);
});
