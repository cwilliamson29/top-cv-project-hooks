import { useContext } from 'react';
import PrintContext from '../../context/printContext';
import { Row, Label, TabPane } from 'reactstrap';
import { NavSlider } from '../utils/navSlider';

export default function InfoTab() {
	const { abr, setAbr, name, setName, sumSize, setSumSize, loc, setLoc, phone, setPhone, email, setEmail, setColor, color, colorOptions } = useContext(PrintContext);
	return (
		<TabPane tabId="1">
			<div className="row h5 fw-bold pt-1">
				<div className="col-md-7" style={{ paddingLeft: '50px' }}>
					<p>Adjust your font size below</p>
				</div>
				<div className="col-md-5 flex-end">
					<div className="row pb-1 flex-end">
						<div className="col-5 text-end">
							<Label className="text-primary fw-bold">Color:</Label>
						</div>
						<div className="col-4">
							<select name="color" className="selColors" onChange={(e) => setColor(e.target.value)} defaultValue={color}>
								{colorOptions.map((option, idx) => (
									<option key={idx} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
			<Row className="bg-light pt-1 pb-1">
				<NavSlider val={abr} def={100} setter={setAbr} name="Name Initials Size" mdSize={4} />
				<NavSlider val={name} def={50} setter={setName} name="Name Header Size" mdSize={4} />
				<NavSlider val={sumSize} def={13} setter={setSumSize} name="Summary Size" mdSize={4} />
			</Row>
			<Row className="bg-clight pt-1 pb-1">
				<NavSlider val={loc} def={15} setter={setLoc} name="Location Size" mdSize={4} />
				<NavSlider val={phone} def={15} setter={setPhone} name="Phone Size" mdSize={4} />
				<NavSlider val={email} def={15} setter={setEmail} name="Email Size" mdSize={4} />
			</Row>
		</TabPane>
	);
}
