import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Col } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { EduInput } from './utils/eduInput';

function Education(props) {
	const { handleEduDelete } = useContext(DataContext);
	const id = props.education.id;
	const [school, setSchool] = useState(props.education.school);
	const [study, setStudy] = useState(props.education.study);
	const [major, setMajor] = useState(props.education.major);
	const [dateFrom, setDateFrom] = useState(props.education.dateFrom);
	const [dateTo, setDateTo] = useState(props.education.dateTo);

	return (
		<Card className="bg-light text-dark mb-3 border border-info border-2">
			<CardHeader className="bg-dark text-light mb-3">
				<Row>
					<Col md={1}></Col>
					<Col md={10} className="text-center"></Col>
					<Col md={1} className="text-end">
						<span onClick={() => handleEduDelete(id)}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row className="pr-5 pl-2">
					<EduInput name={study} setter={setStudy} id={id} type="study" mdSize={10} />
					<EduInput name={major} setter={setMajor} id={id} type="major" mdSize={10} />
					<EduInput name={school} setter={setSchool} id={id} type="school" mdSize={10} />
					<EduInput name={dateFrom} setter={setDateFrom} id={id} type="dateFrom" mdSize={4} />
					<EduInput name={dateTo} setter={setDateTo} id={id} type="dateTo" mdSize={3} />
				</Row>
			</CardBody>
		</Card>
	);
}

export default Education;
