import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Button, Col } from 'reactstrap';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function RenderEducation(props) {
	const [editing, setEditing] = useState(true);
	const [school, setSchool] = useState(props.education.school);
	const [study, setStudy] = useState(props.education.school);
	const [dateFrom, setDateFrom] = useState(props.education.school);
	const [dateTo, setDateTo] = useState(props.education.school);

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
								<FontAwesomeIcon icon={faFloppyDisk} size="xl" />
							</span>
						</Col>
						<Col md={10} className="text-center">
							Area of Study
						</Col>
						<Col md={1} className="text-end">
							{/*<span onClick={() => this.props.onDelete(this.state.id)}><FontAwesomeIcon icon={faTrash} size="xl" /></span>*/}
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
		<div>
			<h1>{school}</h1>
		</div>
	);
}

export default RenderEducation;
