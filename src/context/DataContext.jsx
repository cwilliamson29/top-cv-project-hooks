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

	return (
		<DataContext.Provider
			value={{
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
