import React, { useState } from 'react';
import { Row, Label, Input, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function ContactInfo(props) {
	const [fname, setFname] = useState(props.contact.fname);
	const [lname, setLname] = useState(props.contact.lname);
	const [email, setEmail] = useState(props.contact.email);
	const [phone, setPhone] = useState(props.contact.phone);
	const [editing, setEditing] = useState(true);

	const save = (i1, i2, i3, i4) => {
		props.saveInfo(i1, i2, i3, i4);
		setEditing(false);
	};
	const deleteInfo = () => {
		setFname('');
		setLname('');
		setEmail('');
		setPhone('');
		props.handleDelete();
	};

	if (editing) {
		return (
			<div className="pb-5">
				<Row>
					<Col md={1}>
						<span
							onClick={() => {
								save(fname, lname, email, phone);
							}}>
							<FontAwesomeIcon icon={faFloppyDisk} size="xl" color="orange" />
						</span>
					</Col>
					<Col md={10} className="text-center">
						Work History
					</Col>
					<Col md={1} className="text-end">
						<span onClick={() => deleteInfo()}>
							<FontAwesomeIcon icon={faTrash} size="xl" color="red" />
						</span>
					</Col>
				</Row>
				<Row>
					<div className="col-md-2 text-end pb-3">
						<Label for="fName">First Name:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="text" onChange={(e) => setFname(e.target.value)} value={fname} name="fname" placeholder="First Name" />
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="lname">Last Name:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="text" onChange={(e) => setLname(e.target.value)} value={lname} name="lname" placeholder="Last Name" />
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="email">Email:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="You@you.com" />
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="phone">Phone:</Label>
					</div>
					<div className="col-md-4 pb-3">
						<Input type="phone" onChange={(e) => setPhone(e.target.value)} value={phone} name="phone" placeholder="phone" />
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
							<FontAwesomeIcon icon={faFilePen} size="xl" color="darkgreen" />
						</span>
					</Col>
					<Col md={10} className="text-center">
						Work History
					</Col>
					<Col md={1} className="text-end">
						<span onClick={() => deleteInfo()}>
							<FontAwesomeIcon icon={faTrash} size="xl" color="red" />
						</span>
					</Col>
				</Row>
				<Row>
					<div className="col-md-2 text-end pb-3">
						<Label for="firstName">First Name:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="firstName">{fname}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="lastName">Last Name:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="lastName">{lname}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="email">Email:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="email">{email}</Label>
					</div>

					<div className="col-md-2 text-end pb-3">
						<Label for="phone">Phone:</Label>
					</div>
					<div className="col-md-4 pb-3 fw-bold">
						<Label for="phone">{phone}</Label>
					</div>
				</Row>
			</div>
		);
	}
}

export default ContactInfo;
