import { Col } from 'reactstrap';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export function CertInput({ name, setter, id, type, mdSize }) {
	const { updateCertArray } = useContext(DataContext);
	const ph = () => {
		if (type === 'cert') return 'Full Stack Web Developer';
		if (type === 'source') return 'Coursera';
		if (type === 'date') return 'October 2022';
	};

	const onBlur = (e) => {
		updateCertArray(id, type, e.target.value);
	};

	return (
		<Col md={mdSize}>
			<input type="text" value={name} onChange={(e) => setter(e.target.value)} className={`${type}`} placeholder={ph()} onBlur={onBlur} />
		</Col>
	);
}
