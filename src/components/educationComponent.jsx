import React, { useState } from 'react';
import { Row, Label, Input, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import RenderEducation from './renderEducation';

function Education() {
	const [eduArray, setEduArray] = useState([]);
	const [eduObj, setEduObj] = useState({
		id: uniqid(),
		school: 'asdf',
		study: '',
		dateFrom: '',
		dateTo: '',
	});

	return (
		<Row>
			<Col md={12} className="text-center">
				<h1>Add Areas of Study</h1>
			</Col>

			{eduArray.map((item, i) => (
				<RenderEducation key={item.id} education={item} />
			))}

			<div className="text-center pt-3">
				<Button className="bg-primary rounded-pill" onClick={() => setEduArray((eduArray) => [...eduArray, eduObj])}>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</div>
			<h1>
				{eduArray.map((item, i) => (
					<div>
						<div>Test:</div>
						<div>{item.name}</div>
						<div>{item.title}</div>
					</div>
				))}
			</h1>
		</Row>
	);
}

export default Education;
