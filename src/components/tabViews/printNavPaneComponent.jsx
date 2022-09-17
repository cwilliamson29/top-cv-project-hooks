import React from 'react';
import { Col, Row } from 'reactstrap';

export function PrintNav({ val, def, setter, name, mdSize }) {
	//setter(def);
	const minVal = def - 10;
	const maxVal = def + 10;
	let min = minVal.toString();
	let max = maxVal.toString();

	return (
		<Col md={mdSize}>
			<Row>
				<Col md={12} className="text-primary fw-bold">
					{name}
				</Col>
			</Row>
			<Row>
				<div className="slideCont">
					<input type="range" className="form-range printSlide" min={min} max={max} value={val} onChange={(e) => setter(e.target.value)} />
				</div>
				<div className="inputCont">
					<input type="float" className="printInputBox" value={val} onChange={(e) => setter(e.target.value)} />
				</div>
			</Row>
		</Col>
	);
}
