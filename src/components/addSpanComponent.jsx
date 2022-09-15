import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { BsFillPlusCircleFill } from 'react-icons/bs';

export default function AddSpan(props) {
	const { addEducation, addCert, addSkills, addWork } = useContext(DataContext);

	if (props.name === 'Education') {
		return (
			<span
				onClick={() => {
					addEducation();
				}}>
				<BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
			</span>
		);
	} else if (props.name === 'Certifications') {
		return (
			<span
				onClick={() => {
					addCert();
				}}>
				<BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
			</span>
		);
	} else if (props.name === 'Skills') {
		return (
			<span
				onClick={() => {
					addSkills();
				}}>
				<BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
			</span>
		);
	} else if (props.name === 'Work History') {
		return (
			<span
				onClick={() => {
					addWork();
				}}>
				<BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
			</span>
		);
	}
}
