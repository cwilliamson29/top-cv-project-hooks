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
	const updateEduArray = (itemId, school, study, major, dateFrom, dateTo) => {
		setEduArray(
			eduArray.map((x) => {
				if (x.id !== itemId) return x;
				return { ...x, school: school, study: study, major: major, dateFrom: dateFrom, dateTo: dateTo };
			})
		);
	};
	const updateCertArray = (itemId, cert, source, major, date) => {
		setCertArray(
			certArray.map((x) => {
				if (x.id !== itemId) return x;
				return { ...x, cert: cert, source: source, date: date };
			})
		);
	};
	const updateSkillsArray = (itemId, cert, source, major, date) => {
		setSkillsArray(
			skillsArray.map((x) => {
				if (x.id !== itemId) return x;
				return { ...x, cert: cert, source: source, date: date };
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

	return (
		<DataContext.Provider
			value={{
				contact,
				setContact,
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
