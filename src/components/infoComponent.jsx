import React from 'react';
import { Row, Col } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function ContactInfo(props) {
	const { contact, handleInfoDelete, setInfo } = useContext(DataContext);

	return (
		<div className="pb-5">
			<Row className="mb-3">
				<Col md={1}></Col>
				<Col md={10} className="text-center fc">
					<h4>Personal Information</h4>
				</Col>
				<Col md={1} className="text-end">
					<span onClick={() => handleInfoDelete()}>
						<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
					</span>
				</Col>
			</Row>
			<Row>
				<div className="col-md-5 pb-3">
					<input type="text" className="name" onChange={(e) => setInfo('fname', e.target.value)} value={contact.fname} name="fname" placeholder="First Name" />
				</div>

				<div className="col-md-5 pb-3">
					<input type="text" className="name" onChange={(e) => setInfo('lname', e.target.value)} value={contact.lname} name="lname" placeholder="Last Name" />
				</div>

				<div className="col-md-4 pb-3">
					<input type="email" className="epl" onChange={(e) => setInfo('email', e.target.value)} value={contact.email} name="email" placeholder="You@you.com" />
				</div>

				<div className="col-md-4 pb-3">
					<input type="phone" className="epl" onChange={(e) => setInfo('phone', e.target.value)} value={contact.phone} name="phone" placeholder="(992) 867-5309" />
				</div>

				<div className="col-md-4 pb-3">
					<input type="text" className="epl" onChange={(e) => setInfo('loc', e.target.value)} value={contact.loc} name="phone" placeholder="Atlanta, GA, 30301" />
				</div>
			</Row>
		</div>
	);
}

export default ContactInfo;
