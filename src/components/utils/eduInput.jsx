import { Col } from 'reactstrap';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export function EduInput({ name, setter, id, type, mdSize }) {
	const { updateEduArray } = useContext(DataContext);
	const onBlur = (e) => {
		updateEduArray(id, type, e.target.value);
	};
	const ph = () => {
		if (type === 'study') return 'Bachelors of Science';
		if (type === 'major') return 'Computer Science';
		if (type === 'school') return 'University of Georgia';
		if (type === 'dateTo') return 'Fall 2014';
		if (type === 'dateFrom') return 'Fall 2020';
	};

	return (
		<Col md={mdSize}>
			<input type="text" value={name} onChange={(e) => setter(e.target.value)} className={`${type}`} placeholder={ph()} onBlur={onBlur} />
		</Col>
	);
}
