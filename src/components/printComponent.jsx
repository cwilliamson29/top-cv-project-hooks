import React, { useState, useRef } from 'react';
import { Card, CardHeader, Row, CardBody, Col, Button, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import classnames from 'classnames';
import { ModernTemplate } from './templates/modernTemplate';

const ResumeBuilder = (props) => {
	const componentRef = React.useRef(null);
	const contact = props.contact;
	const summary = props.summary;
	const educ = props.eduArray;
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

	const colorOptions = [
		{ value: 'hsl(225, 100%, 55%)', label: 'Blue' },
		{ value: 'hsl(0, 0%, 0%)', label: 'Black' },
		{ value: 'hsl(0, 100%, 55%)', label: 'Red' },
		{ value: 'hsl(36, 100%, 35%)', label: 'Dark Orange' },
	];

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<Row>
				<div className="mt-5"></div>
				<Col md={1}></Col>
				<Col md={10}>
					<Card className="mb-1 border border-dark border-1">
						<CardHeader className="text-center h1 fc text-light bg-dark">
							<Row>
								<Col md={2}>
									<Button onClick={() => props.setPreview(false)} className="bg-primary">
										Go Back
									</Button>
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
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Major:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEdu2(e.target.value)} value={edu2} />
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">School:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setEdu3(e.target.value)} value={edu3} />
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
				<ModernTemplate ref={componentRef} info={contact} summary={summary} educ={educ} abr={abr} name={name} sumSize={sumSize} loc={loc} phone={phone} email={email} color={color} edu1={edu1} edu2={edu2} edu3={edu3} />
			</div>
		</div>
	);
};

export default ResumeBuilder;
