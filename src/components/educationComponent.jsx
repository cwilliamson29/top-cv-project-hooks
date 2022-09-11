import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function Education(props) {
	const [editing, setEditing] = useState(true);
	const [school, setSchool] = useState('');
	const [study, setStudy] = useState('');
	const [dateFrom, setDateFrom] = useState('');
	const [dateTo, setDateTo] = useState('');

	const save = (id, i1, i2, i3, i4) => {
		props.saveEducation(id, i1, i2, i3, i4);
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
									save(props.education.id, school, study, dateFrom, dateTo);
								}}>
								<FontAwesomeIcon icon={faFloppyDisk} size="xl" />
							</span>
						</Col>
						<Col md={10} className="text-center">
							Area of Study
						</Col>
						<Col md={1} className="text-end">
							<span onClick={() => props.handleDelete(props.education.id)}>
								<FontAwesomeIcon icon={faTrash} size="xl" />
							</span>
						</Col>
					</Row>
				</CardHeader>
				<CardBody>
					<Row className="pr-5 pl-2">
						<div className="col-md-2 text-end pb-3">
							<Label for="school">School:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => setSchool(e.target.value)} value={school} id="school" placeholder="School" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="study">Area of study:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => setStudy(e.target.value)} value={study} id="study" placeholder="Area of study" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="dateFrom">Date From:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="date" onChange={(e) => setDateFrom(e.target.value)} value={dateFrom} id="dateFrom" />
						</div>

						<div className="col-md-2 text-end pb-3">
							<Label for="dateTo">Date To:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="date" onChange={(e) => setDateTo(e.target.value)} value={dateTo} id="dateTo" />
						</div>
					</Row>
				</CardBody>
			</Card>
		);
	}
	return (
		<Card className="bg-light text-dark mb-3 border-dark">
			<CardHeader className="bg-dark text-light mb-3">
				<Row>
					<Col md={1}>
						<span
							onClick={() => {
								setEditing(true);
							}}>
							<FontAwesomeIcon icon={faFilePen} size="xl" />
						</span>
					</Col>
					<Col md={10}>{props.id}</Col>
					<Col md={1} className="text-end">
						<span onClick={() => props.handleDelete(props.education.id)}>
							<FontAwesomeIcon icon={faTrash} size="xl" />
						</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row>
					<div className="col-md-2 text-end pb-3">
						<Label for="school">School:</Label>
					</div>
					<div className="col-md-4 pb-3 text-end fw-bold">
						<Label for="school">{school}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="study">Area of Study:</Label>
					</div>
					<div className="col-md-4 pb-3 text-end fw-bold">
						<Label for="study">{study}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="dateFrom">Date From:</Label>
					</div>
					<div className="col-md-4 pb-3 text-end fw-bold">
						<Label for="dateFrom">{dateFrom}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="dateTo">Date To:</Label>
					</div>
					<div className="col-md-4 pb-3 text-end fw-bold">
						<Label for="dateTo">{dateTo}</Label>
					</div>
				</Row>
			</CardBody>
		</Card>
	);
}

export default Education;
