import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import uniqid from 'uniqid';
import ContactInfo from './infoComponent';
import NavItemRender from './tabViews/navItemComponent';
import NavPaneRender from './tabViews/navPaneComponent';
import { navData } from './tabViews/navData';
import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Main() {
	const [activeTab, setActiveTab] = useState('1');
	const { setContact, setSummary, eduArray, setEduArray, certArray, setCertArray, workArray, setWorkArray, skillsArray, setSkillsArray, descArray, setDescArray } = useContext(DataContext);

	useEffect(() => {
		document.title = 'Rob The Resume Builder';
	});
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

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
				<Row>
					<div className="mt-5"></div>
					<Col md={1}>
						<Button className="bg-primary" onClick={() => loadSample()}>
							LOAD SAMPLE
						</Button>
					</Col>
					<Col md={10}>
						<Card className="mb-5 border border-dark border-1">
							<CardHeader className="text-center h1 fc text-light bg-dark">
								<Row>
									<Col md={2}></Col>
									<Col md={8}>
										<h1>Rob The Resume Builder</h1>
									</Col>
									<Col md={2}>
										<Link to="/preview">
											<Button className="bg-primary">Preview</Button>
										</Link>
										<Outlet />
									</Col>
								</Row>
							</CardHeader>
							<CardBody className="mx-2">
								<div>
									<ContactInfo />
								</div>
								<div className=" pb-5">
									<Nav tabs>
										{navData.map((item, i) => (
											<NavItemRender key={uniqid()} num={item.num} name={item.name} activeTab={activeTab} toggle={toggle} />
										))}
									</Nav>

									<TabContent activeTab={activeTab}>
										<NavPaneRender name={'Summary'} num={'1'} />
										<NavPaneRender name={'Education'} num={'2'} />
										<NavPaneRender name={'Certifications'} num={'3'} />
										<NavPaneRender name={'Skills'} num={'4'} />
										<NavPaneRender name={'Work History'} num={'5'} />
									</TabContent>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col md={1}></Col>
				</Row>
			</Container>
		</div>
	);
}
