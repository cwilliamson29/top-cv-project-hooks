import React, { useState } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import classnames from 'classnames';
import { ModernTemplate } from './templates/modernTemplate';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Outlet, Link } from 'react-router-dom';

const ResumeBuilder = (props) => {
	const { contact, summary } = useContext(DataContext);
	const componentRef = React.useRef(null);
	const [activeTab, setActiveTab] = useState('1');
	const [abr, setAbr] = useState('100');
	const [name, setName] = useState('50');
	const [sumSize, setSumSize] = useState('13');
	const [loc, setLoc] = useState('15');
	const [phone, setPhone] = useState('15');
	const [email, setEmail] = useState('15');
	const [color, setColor] = useState('hsl(225, 100%, 55%)');
	const [edu1, setEdu1] = useState('14');
	const [edu2, setEdu2] = useState('13');
	const [edu3, setEdu3] = useState('14');
	const [cert1, setCert1] = useState('16');
	const [cert2, setCert2] = useState('12');
	const [cert3, setCert3] = useState('12');
	const [skill1, setSkill1] = useState('14');
	const [skill2, setSkill2] = useState('14');
	const [work1, setWork1] = useState('18');
	const [work2, setWork2] = useState('14');
	const [work3, setWork3] = useState('12');

	const colorOptions = [
		{ value: 'hsl(225, 100%, 55%)', label: 'Blue' },
		{ value: 'hsl(220, 100%, 30%)', label: 'Dark Blue' },
		{ value: 'hsl(0, 0%, 0%)', label: 'Black' },
		{ value: 'hsl(0, 100%, 55%)', label: 'Red' },
		{ value: 'hsl(0, 100%, 25%)', label: 'Maroon' },
		{ value: 'hsl(36, 100%, 35%)', label: 'Dark Orange' },
	];

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
			<Row>
				<div className="mt-5"></div>
				<Col md={1}></Col>
				<Col md={10}>
					<Card className="mb-1 border border-dark border-1">
						<CardHeader className="text-center h1 fc text-light bg-dark">
							<Row>
								<Col md={2}>
									<Link to="/">
										<Button className="bg-primary">Go Back</Button>
									</Link>
									<Outlet />
								</Col>
								<Col md={8}>
									<h1>Rob The Resume Builder</h1>
								</Col>
								<Col md={2}>
									<ReactToPrint trigger={() => <Button className="bg-primary">Save PDF</Button>} content={() => componentRef.current} />
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<div className=" pb-1">
								<Nav tabs>
									<NavItem className="fc">
										<NavLink
											className={classnames({ active: activeTab === '1' })}
											onClick={() => {
												toggle('1');
											}}>
											Personal Information
										</NavLink>
									</NavItem>
									<NavItem className="fc">
										<NavLink
											className={classnames({ active: activeTab === '2' })}
											onClick={() => {
												toggle('2');
											}}>
											Education
										</NavLink>
									</NavItem>
									<NavItem className="fc">
										<NavLink
											className={classnames({ active: activeTab === '3' })}
											onClick={() => {
												toggle('3');
											}}>
											Certifications
										</NavLink>
									</NavItem>
									<NavItem className="fc">
										<NavLink
											className={classnames({ active: activeTab === '4' })}
											onClick={() => {
												toggle('4');
											}}>
											Skills
										</NavLink>
									</NavItem>
									<NavItem className="fc">
										<NavLink
											className={classnames({ active: activeTab === '5' })}
											onClick={() => {
												toggle('5');
											}}>
											Work History
										</NavLink>
									</NavItem>
								</Nav>

								<TabContent activeTab={activeTab}>
									<TabPane tabId="1">
										<div className="row h5 fw-bold pt-1">
											<div className="col-md-12" style={{ paddingLeft: '50px' }}>
												<p>Adjust your font size below</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Name Initials:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setAbr(e.target.value)} value={abr} />
													</div>
												</div>

												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Full Name:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setName(e.target.value)} value={name} />
													</div>
												</div>

												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Summary:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setSumSize(e.target.value)} value={sumSize} />
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Location:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setLoc(e.target.value)} value={loc} />
													</div>
												</div>
												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Phone:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
													</div>
												</div>
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Email:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Color:</Label>
													</div>
													<div className="col-4">
														<Input type="select" name="select" onChange={(e) => setColor(e.target.value)} defaultValue={color}>
															{colorOptions.map((option, idx) => (
																<option key={idx} value={option.value}>
																	{option.label}
																</option>
															))}
														</Input>
													</div>
												</div>
												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Phone:</Label>
													</div>
												</div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId="2">
										<div className="row h5 fw-bold pt-1">
											<div className="col-md-12" style={{ paddingLeft: '50px' }}>
												<p>Adjust your font size below</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Program:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEdu1(e.target.value)} value={edu1} />
													</div>
												</div>
												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Major:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEdu2(e.target.value)} value={edu2} />
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">School:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEdu3(e.target.value)} value={edu3} />
													</div>
												</div>
												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Year:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEdu2(e.target.value)} value={edu2} />
													</div>
												</div>
											</div>

											<div className="col-md-4"></div>
										</div>
									</TabPane>
									<TabPane tabId="3">
										<div className="row h5 fw-bold pt-1">
											<div className="col-md-12" style={{ paddingLeft: '50px' }}>
												<p>Adjust your font size below</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Certification:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setCert1(e.target.value)} value={cert1} />
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Organization:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setCert2(e.target.value)} value={cert2} />
													</div>
												</div>
											</div>

											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Date:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setCert3(e.target.value)} value={cert3} />
													</div>
												</div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId="4">
										<div className="row h5 fw-bold pt-1">
											<div className="col-md-12" style={{ paddingLeft: '50px' }}>
												<p>Adjust your font size below</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Skills Name:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-3 text-end">
														<Label className="text-primary fw-bold">Experience:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
													</div>
												</div>
											</div>
											<div className="col-md-4 bg-clight">
												<div className="row pb-1 bg-clight"></div>
											</div>
										</div>
									</TabPane>
									<TabPane tabId="5">
										<div className="row h5 fw-bold pt-1">
											<div className="col-md-12" style={{ paddingLeft: '50px' }}>
												<p>Adjust your font size below</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Company:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setWork1(e.target.value)} value={work1} />
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-3 text-end">
														<Label className="text-primary fw-bold">Title:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setWork2(e.target.value)} value={work2} />
													</div>
												</div>
											</div>
											<div className="col-md-4 bg-clight">
												<div className="row pb-1 bg-clight">
													<div className="col-4 text-end">
														<Label className="text-primary fw-bold">Descriptions:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setWork3(e.target.value)} value={work3} />
													</div>
												</div>
											</div>
										</div>
									</TabPane>
								</TabContent>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col md={1}></Col>
			</Row>

			<div className="row justify-content-center">
				<ModernTemplate
					ref={componentRef}
					info={contact}
					summary={summary}
					abr={abr}
					name={name}
					sumSize={sumSize}
					loc={loc}
					phone={phone}
					email={email}
					color={color}
					edu1={edu1}
					edu2={edu2}
					edu3={edu3}
					cert1={cert1}
					cert2={cert2}
					cert3={cert3}
					skill1={skill1}
					skill2={skill2}
					work1={work1}
					work2={work2}
					work3={work3}
				/>
			</div>
		</Container>
	);
};

export default ResumeBuilder;
