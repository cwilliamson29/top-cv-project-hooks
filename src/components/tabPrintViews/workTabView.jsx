import { useContext } from 'react';
import PrintContext from '../../context/printContext';
import { Row, TabPane } from 'reactstrap';
import { NavSlider } from '../utils/navSlider';

export default function WorkTab() {
	const { work1, setWork1, work2, setWork2, work3, setWork3 } = useContext(PrintContext);
	return (
		<TabPane tabId="5">
			<div className="row h5 fw-bold pt-1">
				<div className="col-md-7" style={{ paddingLeft: '50px' }}>
					<p>Adjust your font size below</p>
				</div>
			</div>
			<Row className="bg-light pt-1 pb-1">
				<NavSlider val={work1} def={18} setter={setWork1} name="Company Title" mdSize={4} />
				<NavSlider val={work2} def={14} setter={setWork2} name="Job Title" mdSize={4} />
				<NavSlider val={work3} def={12} setter={setWork3} name="Descriptions" mdSize={4} />
			</Row>
			<Row className="bg-light pt-1 pb-1"></Row>
		</TabPane>
	);
}
