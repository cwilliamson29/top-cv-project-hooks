import { useContext } from 'react';
import PrintContext from '../../context/printContext';
import { Row, TabPane } from 'reactstrap';
import { NavSlider } from '../utils/navSlider';

export default function EduTab() {
	const { edu1, setEdu1, edu2, setEdu2, edu3, setEdu3, edu4, setEdu4 } = useContext(PrintContext);
	return (
		<TabPane tabId="2">
			<div className="row h5 fw-bold pt-1">
				<div className="col-md-7" style={{ paddingLeft: '50px' }}>
					<p>Adjust your font size below</p>
				</div>
			</div>
			<Row className="bg-light pt-1 pb-1">
				<NavSlider val={edu1} def={14} setter={setEdu1} name="Program" mdSize={3} />
				<NavSlider val={edu2} def={13} setter={setEdu2} name="Major" mdSize={3} />
				<NavSlider val={edu3} def={14} setter={setEdu3} name="School" mdSize={3} />
				<NavSlider val={edu4} def={13} setter={setEdu4} name="Year" mdSize={3} />
			</Row>
			<Row className="bg-light pt-1 pb-1"></Row>
		</TabPane>
	);
}
