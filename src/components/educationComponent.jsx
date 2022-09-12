import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function Education(props) {
	const [editing, setEditing] = useState(true);
	const [school, setSchool] = useState(props.education.school);
	const [study, setStudy] = useState(props.education.study);
	const [major, setMajor] = useState(props.education.major);
	const [dateFrom, setDateFrom] = useState(props.education.dateFrom);
	const [dateTo, setDateTo] = useState(props.education.dateTo);

	const save = (id, i1, i2, i3, i4, i5) => {
		props.saveEducation(id, i1, i2, i3, i4, i5);
		setEditing(false);
	};

	if (editing) {
		return (
			<Card className="bg-light text-dark mb-3 border border-info border-2">
				<CardHeader className="bg-dark text-light mb-3">
					<Row>
						<Col md={1}>
							<span
								onClick={() => {
									save(props.education.id, school, study, major, dateFrom, dateTo);
								}}>
								<FontAwesomeIcon icon={faFloppyDisk} size="xl" color="orange" />
							</span>
						</Col>
						<Col md={10} className="text-center">
							Area of Study
						</Col>
						<Col md={1} className="text-end">
							<span onClick={() => props.handleDelete(props.education.id)}>
								<FontAwesomeIcon icon={faTrash} size="xl" color="red" />
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
							<Input type="text" onChange={(e) => setSchool(e.target.value)} value={school} id="school" placeholder="University / Program" />
						</div>

						<div className="col-md-1 text-end pb-3">
							<Label for="study">Program:</Label>
						</div>
						<div className="col-md-3 pb-3">
							<Input type="text" onChange={(e) => setStudy(e.target.value)} value={study} id="study" placeholder="Bachelors of Science" />
						</div>
						<div className="col-md-1 text-end pb-3">
							<Label for="study">Major:</Label>
						</div>
						<div className="col-md-3 pb-3">
							<Input type="text" onChange={(e) => setMajor(e.target.value)} value={major} id="study" placeholder="Computer Science" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="dateFrom">Date From:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => setDateFrom(e.target.value)} value={dateFrom} id="dateFrom" placeholder="Fall 2005" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="dateTo">Date To:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => setDateTo(e.target.value)} value={dateTo} id="dateTo" placeholder="Spring 2010" />
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
								<FontAwesomeIcon icon={faFilePen} size="xl" color="darkgreen" />
							</span>
						</Col>
						<Col md={10}>{props.id}</Col>
						<Col md={1} className="text-end">
							<span onClick={() => props.handleDelete(props.education.id)}>
								<FontAwesomeIcon icon={faTrash} size="xl" color="red" />
							</span>
						</Col>
					</Row>
				</CardHeader>
				<CardBody>
					<Row>
						<h1>{school}</h1>
						<h4>{study}</h4>
						<h5 className="ml-c25 fi">{major}</h5>
						<p>
							{dateFrom} to {dateTo}
						</p>
					</Row>
				</CardBody>
			</Card>
		);
	}
}

export default Education;
