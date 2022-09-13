import React, { useState, useRef } from 'react';
import { Card, CardHeader, Row, CardBody, Col, Button, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import classnames from 'classnames';
import { ModernTemplate } from './templates/modernTemplate';
import { PI } from './templates/modernDynamicCSS';

const ResumeBuilder = (props) => {
	const componentRef = React.useRef(null);
	const contact = props.contact;
	const summary = props.summary;
	const [activeTab, setActiveTab] = useState('1');
	const [abr, setAbr] = useState('100px');
	const [name, setName] = useState('50px');
	const [sumSize, setSumSize] = useState('13px');

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
										<div className="row pt-3">
											<div className="col-md-4">
												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Name Initials:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setAbr(e.target.value)} value={abr} id="company" placeholder="Company Name" />
													</div>
												</div>

												<div className="row pb-1">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Full Name:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setName(e.target.value)} value={name} id="company" placeholder="Company Name" />
													</div>
												</div>

												<div className="row pb-1 bg-clight">
													<div className="col-5 text-end">
														<Label className="text-primary fw-bold">Summary:</Label>
													</div>
													<div className="col-4">
														<Input type="text" onChange={(e) => setSumSize(e.target.value)} value={sumSize} id="company" placeholder="Company Name" />
													</div>
												</div>
											</div>
											<div className="col-md-4">asdfasdfa</div>
											<div className="col-md-4">asdfasdfa</div>
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
				<ModernTemplate ref={componentRef} info={contact} summary={summary} abr={abr} name={name} sumSize={sumSize} />
			</div>
		</div>
	);
};

export default ResumeBuilder;
