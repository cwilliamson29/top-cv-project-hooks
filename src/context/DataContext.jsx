import { createContext, useState, useEffect } from 'react';
import uniqid from 'uniqid';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [contact, setContact] = useState({ fname: '', lname: '', email: '', phone: '', loc: '' });
	const [summary, setSummary] = useState('');
	const [eduArray, setEduArray] = useState([]);
	const [certArray, setCertArray] = useState([]);
	const [workArray, setWorkArray] = useState([]);
	const [skillsArray, setSkillsArray] = useState([]);
	const [descArray, setDescArray] = useState([]);
	const [activeTab, setActiveTab] = useState('1');
	const [preview, setPreview] = useState(false);

	useEffect(() => {
		document.title = 'Rob The Resume Builder';
	});
	const addEducation = () => {
		setEduArray([...eduArray, { id: uniqid(), school: '', study: '', major: '', dateFrom: '', dateTo: '' }]);
	};
	const addCert = () => {
		setCertArray([...certArray, { id: uniqid(), cert: '', source: '', date: '' }]);
	};
	const addWork = () => {
		setWorkArray([...workArray, { id: uniqid(), company: '', title: '', dateFrom: '', dateTo: '' }]);
	};

	const addWorkDesc = (itemId) => {
		setDescArray([...descArray, { id: uniqid(), parentId: itemId, text: '' }]);
	};

	const addSkills = () => {
		setSkillsArray([...skillsArray, { id: uniqid(), skill: '', exp: '' }]);
	};
	const setInfo = (item, text) => {
		if (item === 'fname') return setContact({ ...contact, fname: text });
		if (item === 'lname') return setContact({ ...contact, lname: text });
		if (item === 'email') return setContact({ ...contact, email: text });
		if (item === 'phone') return setContact({ ...contact, phone: text });
		if (item === 'loc') return setContact({ ...contact, loc: text });
	};
	const updateEduArray = (itemId, item, text) => {
		setEduArray(
			eduArray.map((x) => {
				if (x.id !== itemId) return x;
				if (item === 'school') return { ...x, school: text };
				if (item === 'major') return { ...x, major: text };
				if (item === 'study') return { ...x, study: text };
				if (item === 'dateFrom') return { ...x, dateFrom: text };
				if (item === 'dateTo') return { ...x, dateTo: text };
			})
		);
	};
	const updateCertArray = (itemId, item, text) => {
		console.log(certArray);
		setCertArray(
			certArray.map((x) => {
				if (x.id !== itemId) return x;
				if (item === 'cert') return { ...x, cert: text };
				if (item === 'source') return { ...x, source: text };
				if (item === 'date') return { ...x, date: text };
			})
		);
	};
	const updateSkillsArray = (itemId, item, text) => {
		setSkillsArray(
			skillsArray.map((x) => {
				if (x.id !== itemId) return x;
				if (item === 'skill') return { ...x, skill: text };
				if (item === 'exp') return { ...x, exp: text };
			})
		);
	};
	const updateWorkArray = (itemId, item, text) => {
		setWorkArray(
			workArray.map((x) => {
				if (x.id !== itemId) return x;
				if (item === 'company') return { ...x, company: text };
				if (item === 'title') return { ...x, title: text };
				if (item === 'dateFrom') return { ...x, dateFrom: text };
				if (item === 'dateTo') return { ...x, dateTo: text };
			})
		);
	};
	const updateWorkDescArray = (itemId, text) => {
		setDescArray(
			descArray.map((x) => {
				if (x.id !== itemId) return x;
				return { ...x, text: text };
			})
		);
	};
	const handleInfoDelete = () => {
		setContact({ fname: '', lname: '', email: '', phone: '', loc: '' });
	};
	const handleSummaryDelete = () => {
		setSummary('');
	};
	const handleEduDelete = (id) => {
		setEduArray(eduArray.filter((item) => item.id !== id));
	};
	const handleCertDelete = (id) => {
		setCertArray(certArray.filter((item) => item.id !== id));
	};
	const handleWorkDelete = (id) => {
		setWorkArray(workArray.filter((item) => item.id !== id));
	};
	const handleDescDelete = (id) => {
		setDescArray(descArray.filter((item) => item.id !== id));
	};
	const handleSkillsDelete = (id) => {
		setSkillsArray(skillsArray.filter((item) => item.id !== id));
	};

	const loadSample = () => {
		setContact({ fname: 'Lucy', lname: 'Morningstar', email: 'lucy6@bigbadwood.com', phone: '(321) 654-9875', loc: 'Los Angeles, CA' });
		setSummary(
			'Innovative tech mind with 15 years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions. Extensive expertise in networking systems and working with mainframe computers. Talented leader with unique ideas and a history of successful contributions in the field.'
		);
		setEduArray([...eduArray, { id: uniqid(), school: 'Univeristy of Georgia', study: 'Bachelors of Science', major: 'Computer Science', dateFrom: 'Fall 2012', dateTo: 'Spring 2018' }]);
		setCertArray([...certArray, { id: uniqid(), cert: 'Full Stack Web Developer', source: 'Coursera', date: 'October 2020' }]);
		setWorkArray([...workArray, { id: 1234, company: 'Amazon', title: 'Jr Software Engineer', dateFrom: 'October 2020', dateTo: 'November 2021' }]);
		setWorkArray([...workArray, { id: 5678, company: 'Google', title: 'Jr Software Engineer', dateFrom: 'November 2021', dateTo: 'Present' }]);
		setDescArray([...descArray, { id: uniqid(), parentId: 1234, text: 'Worked on the sinister web data of gigantic proportions' }]);
		setDescArray([...descArray, { id: uniqid(), parentId: 1234, text: 'Helped steal the souls of hundreds of American small businesses' }]);
		setDescArray([...descArray, { id: uniqid(), parentId: 1234, text: 'Developed sinister algorithms to target deep desires' }]);
		setDescArray([...descArray, { id: uniqid(), parentId: 5678, text: "Worked on Google's worlds population control algorithms" }]);
		setDescArray([...descArray, { id: uniqid(), parentId: 5678, text: 'Helped develope the algorithm for predicting sinister treads' }]);
		setDescArray([...descArray, { id: uniqid(), parentId: 5678, text: 'Helped develope the algorithm for snuffing out small businesses on google analytics' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'React', exp: '2 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Java', exp: '4 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'NodeJS', exp: '2 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Express', exp: '2 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'MongoDB', exp: '2 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'MySQL', exp: '7 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'HTML/CSS', exp: '7 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Javascript', exp: '7 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Ruby', exp: '5 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Database Design', exp: '7 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Soul Stealing', exp: 'Infinite Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Linux', exp: '10 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Mac OS', exp: '10 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Windows', exp: '20 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'VS Code', exp: '7 Years' }]);
		setSkillsArray([...skillsArray, { id: uniqid(), skill: 'Sublime Text', exp: '7 Years' }]);
		console.log(descArray);
	};
	
	return (
		<DataContext.Provider
			value={{
				loadSample,
				preview,
				setPreview,
				contact,
				setContact,
				setInfo,
				handleInfoDelete,
				summary,
				setSummary,
				eduArray,
				setEduArray,
				certArray,
				setCertArray,
				workArray,
				setWorkArray,
				skillsArray,
				setSkillsArray,
				descArray,
				setDescArray,
				activeTab,
				setActiveTab,
				addEducation,
				addCert,
				addWork,
				addWorkDesc,
				addSkills,
				updateEduArray,
				updateCertArray,
				updateSkillsArray,
				updateWorkArray,
				updateWorkDescArray,
				handleSummaryDelete,
				handleEduDelete,
				handleCertDelete,
				handleWorkDelete,
				handleDescDelete,
				handleSkillsDelete,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
