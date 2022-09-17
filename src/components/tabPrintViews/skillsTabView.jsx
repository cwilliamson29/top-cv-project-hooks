import { useContext } from 'react';
import PrintContext from '../../context/printContext';
import { Row, TabPane } from 'reactstrap';
import { NavSlider } from '../utils/navSlider';

export default function SkillsTab() {
	const { skill1, setSkill1, skill2, setSkill2 } = useContext(PrintContext);
	return (
		<TabPane tabId="4">
			<div className="row h5 fw-bold pt-1">
				<div className="col-md-7" style={{ paddingLeft: '50px' }}>
					<p>Adjust your font size below</p>
				</div>
			</div>
			<Row className="bg-light pt-1 pb-1">
				<NavSlider val={skill1} def={14} setter={setSkill1} name="Skill Title" mdSize={4} />
				<NavSlider val={skill2} def={14} setter={setSkill2} name="Years Experience" mdSize={4} />
			</Row>
			<Row className="bg-light pt-1 pb-1"></Row>
		</TabPane>
	);
}
