import React, { useState } from 'react';
import { Row, Label, Input, Col } from 'reactstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

function ContactInfo(props) {
	const [editing, setEditing] = useState(true);
	const setInfo = (fname, lname, email, phone) => {
		props.setContact({ fname: fname, lname: lname, email: email, phone: phone });
	};

	if (editing) {
		return (
			<div className="pb-5">
				<Row className="mb-3">
					<Col md={1}>
						<span
							onClick={() => {
								setEditing(false);
							}}>
							<AiFillEye size="2.5em" style={{ color: 'orange' }} />
						</span>
					</Col>
					<Col md={10} className="text-center fc">
						<h4>Personal Information</h4>
					</Col>
					<Col md={1} className="text-end">
						<span onClick={() => props.handleDelete()}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
				<Row>
					<div className="col-md-2 text-end pb-3">
						<Label for="fName">First Name:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="text" onChange={(e) => setInfo(e.target.value, props.contact.lname, props.contact.email, props.contact.phone)} value={props.contact.fname} name="fname" placeholder="First Name" />
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="lname">Last Name:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="text" onChange={(e) => setInfo(props.contact.fname, e.target.value, props.contact.email, props.contact.phone)} value={props.contact.lname} name="lname" placeholder="Last Name" />
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="email">Email:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="email" onChange={(e) => setInfo(props.contact.fname, props.contact.lname, e.target.value, props.contact.phone)} value={props.contact.email} name="email" placeholder="You@you.com" />
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="phone">Phone:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="phone" onChange={(e) => setInfo(props.contact.fname, props.contact.lname, props.contact.email, e.target.value)} value={props.contact.phone} name="phone" placeholder="phone" />
					</div>
				</Row>
			</div>
		);
	} else if (!editing) {
		return (
			<div className="pb-5">
				<Row>
					<Col md={1}>
						<span
							onClick={() => {
								setEditing(true);
							}}>
							<FaPenAlt size="2em" style={{ color: 'darkgreen' }} />
						</span>
					</Col>
					<Col md={10} className="text-center fc">
						<h4>Personal Information</h4>
					</Col>
					<Col md={1} className="text-end">
						<span onClick={() => props.handleDelete()}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
				<Row>
					<div className="col-md-2 text-end pb-3">
						<Label for="firstName">First Name:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="firstName">{props.contact.fname}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="lastName">Last Name:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="lastName">{props.contact.lname}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="email">Email:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="email">{props.contact.email}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="phone">Phone:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="phone">{props.contact.phone}</Label>
					</div>
				</Row>
			</div>
		);
	}
}

export default ContactInfo;
