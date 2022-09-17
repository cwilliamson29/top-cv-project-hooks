import { createContext, useState } from 'react';
import uniqid from 'uniqid';

const PrintContext = createContext({});

export const PrintProvider = ({ children }) => {
	/***********PERSONAL INFO***********/
	const [abr, setAbr] = useState(100);
	const [name, setName] = useState(50);
	const [sumSize, setSumSize] = useState(13);
	const [loc, setLoc] = useState(15);
	const [phone, setPhone] = useState(15);
	const [email, setEmail] = useState(15);
	/***********EDUCATION***********/
	const [edu1, setEdu1] = useState(14);
	const [edu2, setEdu2] = useState(13);
	const [edu3, setEdu3] = useState(14);
	const [edu4, setEdu4] = useState(13);
	/***********CERTIFICATION***********/
	const [cert1, setCert1] = useState(16);
	const [cert2, setCert2] = useState(12);
	const [cert3, setCert3] = useState(12);
	/***********SKILLS***********/
	const [skill1, setSkill1] = useState(14);
	const [skill2, setSkill2] = useState(14);
	/***********WORK HISTORY***********/
	const [work1, setWork1] = useState(18);
	const [work2, setWork2] = useState(14);
	const [work3, setWork3] = useState(12);

	const [color, setColor] = useState('hsl(225, 100%, 55%)');
	const colorOptions = [
		{ value: 'hsl(225, 100%, 55%)', label: 'Blue' },
		{ value: 'hsl(220, 100%, 30%)', label: 'Dark Blue' },
		{ value: 'hsl(0, 0%, 0%)', label: 'Black' },
		{ value: 'hsl(0, 100%, 55%)', label: 'Red' },
		{ value: 'hsl(0, 100%, 25%)', label: 'Maroon' },
		{ value: 'hsl(36, 100%, 35%)', label: 'Dark Orange' },
	];

	return (
		<PrintContext.Provider
			value={{
				abr,
				setAbr,
				name,
				setName,
				sumSize,
				setSumSize,
				loc,
				setLoc,
				phone,
				setPhone,
				email,
				setEmail,
				color,
				setColor,
				colorOptions,
				edu1,
				setEdu1,
				edu2,
				setEdu2,
				edu3,
				setEdu3,
				edu4,
				setEdu4,
				cert1,
				setCert1,
				cert2,
				setCert2,
				cert3,
				setCert3,
				skill1,
				setSkill1,
				skill2,
				setSkill2,
				work1,
				setWork1,
				work2,
				setWork2,
				work3,
				setWork3,
			}}>
			{children}
		</PrintContext.Provider>
	);
};

export default PrintContext;
