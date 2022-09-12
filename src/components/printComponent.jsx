import React, { useRef } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import { ModernTemplate } from './templates/modernTemplate';

const ResumeBuilder = (props) => {
	const componentRef = React.useRef(null);
	const contact = props.contact;

	console.log(contact);

	return (
		<div>
			<Row>
				<div className="mt-5"></div>
				<Col md={1}></Col>
				<Col md={10}>
					<Card className="mb-5 border border-dark border-1">
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
					</Card>
				</Col>
				<Col md={1}></Col>
			</Row>

			<div className="row justify-content-center">
				<ModernTemplate ref={componentRef} info={contact} />
			</div>
		</div>
	);
};

export default ResumeBuilder;
