import { Col } from 'reactstrap';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export function SkillInput({ name, setter, id, type, mdSize }) {
	const { updateSkillsArray } = useContext(DataContext);
	const onBlur = (e) => {
		updateSkillsArray(id, type, e.target.value);
	};
	const ph = () => {
		if (type === 'skill') return 'HTML/CSS/JS';
		if (type === 'exp') return '# of years or blank';
	};

	return (
		<Col md={mdSize}>
			<input type="text" value={name} onChange={(e) => setter(e.target.value)} className={`${type}`} placeholder={ph()} onBlur={onBlur} />
		</Col>
	);
}
