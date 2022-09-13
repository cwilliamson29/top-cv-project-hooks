import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col } from 'reactstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

function Education(props) {
	const [editing, setEditing] = useState(true);

	const setEduArrayId = (itemId, school, study, major, dateFrom, dateTo) => {
		let newEduArray = [];
		props.eduArray.map((item, i) => {
			let arr = item;
			if (item.id == itemId) {
				arr = item;
				arr.school = school;
				arr.study = study;
				arr.major = major;
				arr.dateFrom = dateFrom;
				arr.dateTo = dateTo;
				newEduArray.push(arr);
			} else {
				newEduArray.push(arr);
			}
		});
		props.setEduArray(newEduArray);
	};

	if (editing) {
		return (
			<Card className="bg-light text-dark mb-3 border border-info border-2">
				<CardHeader className="bg-dark text-light mb-3">
					<Row>
						<Col md={1}>
							<span
								onClick={() => {
									setEditing(false);
								}}>
								<AiFillEye size="2.5em" style={{ color: 'orange' }} />
							</span>
						</Col>
						<Col md={10} className="text-center"></Col>
						<Col md={1} className="text-end">
							<span onClick={() => props.handleDelete(props.education.id)}>
								<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
							</span>
						</Col>
					</Row>
				</CardHeader>
				<CardBody>
					<Row className="pr-5 pl-2">
						<div className="col-md-1 text-end pb-3">
							<Label for="school">School:</Label>
						</div>
						<div className="col-md-3 pb-3">
							<Input type="text" onChange={(e) => setEduArrayId(props.education.id, e.target.value, props.education.study, props.education.major, props.education.dateFrom, props.education.dateTo)} value={props.education.school} id="school" placeholder="University / Program" />
						</div>

						<div className="col-md-1 text-end pb-3">
							<Label for="study">Program:</Label>
						</div>
						<div className="col-md-3 pb-3">
							<Input type="text" onChange={(e) => setEduArrayId(props.education.id, props.education.school, e.target.value, props.education.major, props.education.dateFrom, props.education.dateTo)} value={props.education.study} id="study" placeholder="Bachelors of Science" />
						</div>
						<div className="col-md-1 text-end pb-3">
							<Label for="major">Major:</Label>
						</div>
						<div className="col-md-3 pb-3">
							<Input type="text" onChange={(e) => setEduArrayId(props.education.id, props.education.school, props.education.study, e.target.value, props.education.dateFrom, props.education.dateTo)} value={props.education.major} id="major" placeholder="Computer Science" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="dateFrom">Date From:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => setEduArrayId(props.education.id, props.education.school, props.education.study, props.education.major, e.target.value, props.education.dateTo)} value={props.education.dateFrom} id="dateFrom" placeholder="Fall 2005" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="dateTo">Date To:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => setEduArrayId(props.education.id, props.education.school, props.education.study, props.education.major, props.education.dateFrom, e.target.value)} value={props.education.dateTo} id="dateTo" placeholder="Spring 2010" />
						</div>
					</Row>
				</CardBody>
			</Card>
		);
	} else {
		return (
			<Card className="bg-light text-dark mb-3 border-dark">
				<CardHeader className="bg-dark text-light mb-3">
					<Row>
						<Col md={1}>
							<span
								onClick={() => {
									setEditing(true);
								}}>
								<FaPenAlt size="2em" style={{ color: 'darkgreen' }} />
							</span>
						</Col>
						<Col md={10}>{props.id}</Col>
						<Col md={1} className="text-end">
							<span onClick={() => props.handleDelete(props.education.id)}>
								<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
							</span>
						</Col>
					</Row>
				</CardHeader>
				<CardBody>
					<Row>
						<h2>{props.education.study}</h2>
						<h5 className="ml-c25 fi">{props.education.major}</h5>
						<h4>{props.education.school}</h4>
						<p>
							{props.education.dateFrom} to {props.education.dateTo}
						</p>
					</Row>
				</CardBody>
			</Card>
		);
	}
}

export default Education;
