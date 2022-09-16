import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Col } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { CertInput } from './utils/certInput';

function Certification(props) {
	const { handleCertDelete } = useContext(DataContext);
	const id = props.cert.id;
	const [cert, setCert] = useState('');
	const [source, setSource] = useState('');
	const [date, setDate] = useState('');

	return (
		<Card className="bg-light text-dark mb-3 border border-info border-2">
			<CardHeader className="bg-dark text-light mb-3">
				<Row>
					<Col md={12} className="text-end">
						<span onClick={() => handleCertDelete(props.cert.id)}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row className="pr-5 pl-2">
					<CertInput name={cert} setter={setCert} id={id} type="cert" mdSize={10} />
					<span md={1}></span>
					<CertInput name={source} setter={setSource} id={id} type="source" mdSize={3} />
					<CertInput name={date} setter={setDate} id={id} type="date" mdSize={3} />
				</Row>
			</CardBody>
		</Card>
	);
}

export default Certification;
