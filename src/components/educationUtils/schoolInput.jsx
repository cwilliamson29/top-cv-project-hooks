import { Col } from 'reactstrap';
import { useContext, useEffect } from 'react';
import DataContext from '../../context/DataContext';

export function SchoolInput({ school, setSchool, id }) {
	const onChange = (e) => setSchool(e.target.value);
	const { updateEduArray } = useContext(DataContext);
	const onBlur = (e) => {
		updateEduArray(id, 'school', e.target.value);
	};

	return (
		<Col md={12}>
			<input type="text" value={school} onChange={onChange} className="schoolInput" placeholder="University of Georgia" onBlur={onBlur} />
		</Col>
	);
}

export function ProgramInput({ program, setProgram, id }) {
	const onChange = (e) => setProgram(e.target.value);
	const { updateEduArray } = useContext(DataContext);
	const onBlur = (e) => {
		updateEduArray(id, 'study', e.target.value);
	};
	return (
		<Col md={12}>
			<input type="text" value={program} onChange={onChange} className="programInput" placeholder="Bachelors of Science" onBlur={onBlur} />
		</Col>
	);
}

export function MajorInput({ major, setMajor, id }) {
	const onChange = (e) => setMajor(e.target.value);
	const { updateEduArray } = useContext(DataContext);

	const onBlur = (e) => {
		updateEduArray(id, 'major', e.target.value);
	};
	return (
		<Col md={12}>
			<input type="text" value={major} onChange={onChange} className="majorInput" placeholder="Computer Science" onBlur={onBlur} />
		</Col>
	);
}

export function DateToInput({ dateTo, setDateTo, id }) {
	const onChange = (e) => setDateTo(e.target.value);
	const { updateEduArray } = useContext(DataContext);

	const onBlur = (e) => {
		updateEduArray(id, 'dateTo', e.target.value);
	};
	return (
		<Col md={3}>
			<input type="text" value={dateTo} onChange={onChange} className="dateInputTo" placeholder="Fall 2012" onBlur={onBlur} />
		</Col>
	);
}
export function DateFromInput({ dateFrom, setDateFrom, id }) {
	const onChange = (e) => setDateFrom(e.target.value);
	const { updateEduArray } = useContext(DataContext);

	const onBlur = (e) => {
		updateEduArray(id, 'dateFrom', e.target.value);
	};
	return (
		<Col md={3}>
			<input type="text" value={dateFrom} onChange={onChange} className="dateInputFrom" placeholder="Fall 2017" onBlur={onBlur} />
		</Col>
	);
}
