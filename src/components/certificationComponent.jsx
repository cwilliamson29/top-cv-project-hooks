import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col } from 'reactstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function Certification(props) {
	const [editing, setEditing] = useState(true);
	const { updateCertArray, handleCertDelete } = useContext(DataContext);

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
							<span onClick={() => handleCertDelete(props.cert.id)}>
								<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
							</span>
						</Col>
					</Row>
				</CardHeader>
				<CardBody>
					<Row className="pr-5 pl-2">
						<div className="col-md-2 text-end pb-3">
							<Label for="cert">Certification:</Label>
						</div>
						<div className="col-md-7 pb-3">
							<Input type="text" onChange={(e) => updateCertArray(props.cert.id, e.target.value, props.cert.source, props.cert.date)} value={props.cert.cert} id="cert" placeholder="Full Stack Web Developer" />
						</div>
						<div className="col-md-3 pb-3"></div>

						<div className="col-md-2 text-end pb-3">
							<Label for="source">Organization:</Label>
						</div>
						<div className="col-md-4 pb-3">
							<Input type="text" onChange={(e) => updateCertArray(props.cert.id, props.cert.cert, e.target.value, props.cert.date)} value={props.cert.source} id="source" placeholder="Coursera" />
						</div>
						<div className="col-md-2 text-end pb-3">
							<Label for="date">Date Completed:</Label>
						</div>
						<div className="col-md-3 pb-3">
							<Input type="text" onChange={(e) => updateCertArray(props.cert.id, props.cert.cert, props.cert.source, e.target.value)} value={props.cert.date} id="date" placeholder="October 2005" />
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
							<span onClick={() => handleCertDelete(props.cert.id)}>
								<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
							</span>
						</Col>
					</Row>
				</CardHeader>
				<CardBody>
					<Row>
						<h2>{props.cert.cert}</h2>
						<h5 className="ml-c25 fi">
							{props.cert.source} | {props.cert.date}
						</h5>
					</Row>
				</CardBody>
			</Card>
		);
	}
}

export default Certification;
