import React, { useState } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import { ModernTemplate } from './templates/modernTemplate';
import { PrintProvider } from '../context/printContext';
import { Outlet, Link } from 'react-router-dom';
import NavItemRender from './tabViews/navItemComponent';
import { printNavData } from './tabViews/navData';
import InfoTab from './tabPrintViews/infoTabView';
import EduTab from './tabPrintViews/eduTabView';
import CertTab from './tabPrintViews/certTabView';
import SkillsTab from './tabPrintViews/skillsTabView';
import WorkTab from './tabPrintViews/workTabView';
import uniqid from 'uniqid';

const ResumeBuilder = (props) => {
	const componentRef = React.useRef(null);
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
			<PrintProvider>
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
										{printNavData.map((item, i) => (
											<NavItemRender key={uniqid()} num={item.num} name={item.name} activeTab={activeTab} toggle={toggle} />
										))}
									</Nav>

									<TabContent activeTab={activeTab}>
										<InfoTab />
										<EduTab />
										<CertTab />
										<SkillsTab />
										<WorkTab />
									</TabContent>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col md={1}></Col>
				</Row>

				<div className="row justify-content-center">
					<ModernTemplate ref={componentRef} />
				</div>
			</PrintProvider>
		</Container>
	);
};

export default ResumeBuilder;
