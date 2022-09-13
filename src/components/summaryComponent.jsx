import React, { useState } from 'react';
import { Row, Label, Input, Button, Col } from 'reactstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

function Summary(props) {
	const [editing, setEditing] = useState(true);

	if (editing) {
		return (
			<div className="pb-5 col-12">
				<Row className="mb-3 justify-content-center">
					<Col md={1}>
						<span
							onClick={() => {
								setEditing(false);
							}}>
							<AiFillEye size="2.5em" style={{ color: 'orange' }} />
						</span>
					</Col>
					<Col md={7} className="text-center"></Col>
					<Col md={1} className="text-end">
						<span onClick={() => props.onDelete()}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<div className="col-md-9">
						<Label for="summary">Summary</Label>
					</div>
					<div className="col-md-9 pb-3">
						<Input type="textarea" onChange={(e) => props.setSummary(e.target.value)} value={props.summary} name="summary" placeholder="Type your summary here" />
					</div>
				</Row>
			</div>
		);
	} else if (!editing) {
		return (
			<div className="pb-5">
				<Row className="mb-4 justify-content-center">
					<Col md={1}>
						<span
							onClick={() => {
								setEditing(true);
							}}>
							<FaPenAlt size="2em" style={{ color: 'darkgreen' }} />
						</span>
					</Col>
					<Col md={7} className="text-center"></Col>
					<Col md={1} className="text-end">
						<span onClick={() => props.onDelete()}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<div className="col-md-9 pb-3">
						<Label for="summary">Summary</Label>
					</div>
					<div className="col-md-9 pb-3 fw-bold">
						<Label for="summary">{props.summary}</Label>
					</div>
				</Row>
			</div>
		);
	}
}

export default Summary;
