import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import uniqid from 'uniqid';
import ContactInfo from './infoComponent';
import NavItemRender from './tabViews/navItemComponent';
import NavPaneRender from './tabViews/navPaneComponent';
import { navData } from './tabViews/navData';
import { Outlet, Link } from 'react-router-dom';

export default function Main() {
	const [activeTab, setActiveTab] = useState('1');

	useEffect(() => {
		document.title = 'Rob The Resume Builder';
	});

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
				<Row>
					<div className="mt-5"></div>
					<Col md={1}></Col>
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
