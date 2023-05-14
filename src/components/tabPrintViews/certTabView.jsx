import { useContext } from 'react';
import PrintContext from '../../context/printContext';
import { Row, TabPane } from 'reactstrap';
import { NavSlider } from '../utils/navSlider';

export default function CertTab() {
	const { cert1, setCert1, cert2, setCert2, cert3, setCert3 } = useContext(PrintContext);
	return (
		<TabPane tabId="3">
			<div className="row h5 fw-bold pt-1">
				<div className="col-md-7" style={{ paddingLeft: '50px' }}>
					<p>Adjust your font size below</p>
				</div>
			</div>
			<Row className="bg-light pt-1 pb-1">
				<NavSlider val={cert1} def={16} setter={setCert1} name="Certification" mdSize={4} />
				<NavSlider val={cert2} def={12} setter={setCert2} name="From Source" mdSize={4} />
				<NavSlider val={cert3} def={12} setter={setCert3} name="Date Completed" mdSize={4} />
			</Row>
			<Row className="bg-light pt-1 pb-1"></Row>
		</TabPane>
	);
}
