import { Col } from 'reactstrap';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export function WorkInput({ name, setter, id, type, mdSize }) {
	const { updateWorkArray } = useContext(DataContext);
	const onBlur = (e) => {
		updateWorkArray(id, type, e.target.value);
	};
	const ph = () => {
		if (type === 'company') return 'Company Name';
		if (type === 'title') return 'Jr. Software Developer';
		if (type === 'dateFrom') return 'October 2021';
		if (type === 'dateTo') return 'Present';
	};

	return (
		<Col md={mdSize}>
			<input type="text" value={name} onChange={(e) => setter(e.target.value)} className={`${type}`} placeholder={ph()} onBlur={onBlur} />
		</Col>
	);
}
