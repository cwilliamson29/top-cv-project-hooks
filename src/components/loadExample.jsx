import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Button } from 'reactstrap';
import uniqid from 'uniqid';

export default function LoadExample() {
	const { setContact, setSummary, eduArray, setEduArray, certArray, setCertArray, setWorkArray, setSkillsArray, setDescArray } = useContext(DataContext);

	const loadSample = () => {
		setContact({ fname: 'Lucy', lname: 'Morningstar', email: 'lucy6@bigbadwolf.com', phone: '(321) 654-9875', loc: 'Los Angeles, CA' });
		setSummary(
			'Innovative tech mind with 15 years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions. Extensive expertise in networking systems and working with mainframe computers. Talented leader with unique ideas and a history of successful contributions in the field.'
		);
		setEduArray([...eduArray, { id: uniqid(), school: 'Univeristy of Georgia', study: 'Bachelors of Science', major: 'Computer Science', dateFrom: 'Fall 2012', dateTo: 'Spring 2018' }]);
		setCertArray([...certArray, { id: uniqid(), cert: 'Full Stack Web Developer', source: 'Coursera', date: 'October 2020' }]);

		setWorkArray([
			{ id: 1234, company: 'Amazon', title: 'Jr Software Engineer', dateFrom: 'October 2020', dateTo: 'November 2021' },
			{ id: 5678, company: 'Google', title: 'Jr Software Engineer', dateFrom: 'November 2021', dateTo: 'Present' },
		]);
		setDescArray([
			{ id: uniqid(), parentId: 1234, text: 'Worked on the sinister web data of gigantic proportions' },
			{ id: uniqid(), parentId: 1234, text: 'Helped steal the souls of hundreds of American small businesses' },
			{ id: uniqid(), parentId: 1234, text: 'Developed sinister algorithms to target deep desires' },
			{ id: uniqid(), parentId: 5678, text: "Worked on Google's worlds population control algorithms" },
			{ id: uniqid(), parentId: 5678, text: 'Helped develope the algorithm for predicting sinister treads' },
			{ id: uniqid(), parentId: 5678, text: 'Helped develope the algorithm for snuffing out small businesses on google analytics' },
		]);
		setSkillsArray([
			{ id: uniqid(), skill: 'React', exp: '2 Years' },
			{ id: uniqid(), skill: 'Java', exp: '4 Years' },
			{ id: uniqid(), skill: 'NodeJS', exp: '2 Years' },
			{ id: uniqid(), skill: 'Express', exp: '2 Years' },
			{ id: uniqid(), skill: 'MongoDB', exp: '2 Years' },
			{ id: uniqid(), skill: 'MySQL', exp: '7 Years' },
			{ id: uniqid(), skill: 'HTML/CSS', exp: '7 Years' },
			{ id: uniqid(), skill: 'Javascript', exp: '7 Years' },
			{ id: uniqid(), skill: 'Ruby', exp: '5 Years' },
			{ id: uniqid(), skill: 'Database Design', exp: '7 Years' },
			{ id: uniqid(), skill: 'Soul Stealing', exp: 'Infinite Years' },
			{ id: uniqid(), skill: 'Linux', exp: '10 Years' },
			{ id: uniqid(), skill: 'Mac OS', exp: '10 Years' },
			{ id: uniqid(), skill: 'Windows', exp: '20 Years' },
			{ id: uniqid(), skill: 'VS Code', exp: '7 Years' },
			{ id: uniqid(), skill: 'Sublime Text', exp: '7 Years' },
		]);
	};
	return (
		<Button className="bg-primary" onClick={() => loadSample()}>
			LOAD SAMPLE
		</Button>
	);
}
