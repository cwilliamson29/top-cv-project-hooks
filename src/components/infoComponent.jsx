import React, { useState } from 'react';
import { Row, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faFilePen } from '@fortawesome/free-solid-svg-icons';

function ContactInfo(props) {
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [editing, setEditing] = useState(true);

	const save = (i1, i2, i3, i4) => {
		props.saveInfo(i1, i2, i3, i4);
		setEditing(false);
	};

	if (editing) {
		return (
			<div className="pb-5">
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
				<div className="text-center pt-3">
					<Button className="bg-primary w-25" onClick={() => save(fname, lname, email, phone)}>
						<FontAwesomeIcon icon={faFloppyDisk} size="xl" /> Save
					</Button>
				</div>
			</div>
		);
	} else if (!editing) {
		return (
			<div className="pb-5">
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
				<div className="text-center pt-4">
					<Button className="bg-primary w-25" onClick={() => setEditing(true)}>
						<FontAwesomeIcon icon={faFilePen} size="xl" /> Edit
					</Button>
				</div>
			</div>
		);
	}
}

export default ContactInfo;