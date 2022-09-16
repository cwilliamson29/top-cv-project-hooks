import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col } from 'reactstrap';

import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { SchoolInput, ProgramInput, MajorInput, DateToInput, DateFromInput } from './educationUtils/schoolInput';

function Education(props) {
	const { eduArray, updateEduArray, handleEduDelete } = useContext(DataContext);
	const id = props.education.id;
	const [school, setSchool] = useState(props.education.school);
	const [program, setProgram] = useState(props.education.study);
	const [major, setMajor] = useState(props.education.major);
	const [dateFrom, setDateFrom] = useState(props.education.dateFrom);
	const [dateTo, setDateTo] = useState(props.education.dateTo);
	const AUTOSAVE_INTERVAL = 2000;
	/*
	useEffect(() => {
		const timer = setTimeout(() => {
			updateEduArray(id, school, program, major, dateFrom, dateTo);
		}, AUTOSAVE_INTERVAL);
		return () => clearTimeout(timer);
	}, [updateEduArray, id, school, program, major, dateFrom, dateTo]);
*/

	return (
		<Card className="bg-light text-dark mb-3 border border-info border-2">
			<CardHeader className="bg-dark text-light mb-3">
				<Row>
					<Col md={1}></Col>
					<Col md={10} className="text-center"></Col>
					<Col md={1} className="text-end">
						<span onClick={() => handleEduDelete(props.education.id)}>
							<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
						</span>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<Row className="pr-5 pl-2">
					<ProgramInput program={program} setProgram={setProgram} id={id} />
					<MajorInput major={major} setMajor={setMajor} id={id} />
					<SchoolInput school={school} setSchool={setSchool} id={id} />
					<DateFromInput dateFrom={dateFrom} setDateFrom={setDateFrom} id={id} />
					<DateToInput dateTo={dateTo} setDateTo={setDateTo} id={id} />
				</Row>
			</CardBody>
			<button onClick={() => console.log(eduArray)}>eduarray</button>
		</Card>
	);
}

export default Education;
