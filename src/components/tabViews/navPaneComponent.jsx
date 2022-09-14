import React from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Summary from '../summaryComponent';
import Education from '../educationComponent';
import Certification from '../certificationComponent';
import Work from '../workComponent';
import Skills from '../skillsComponent';

export default function NavPaneRender(props) {
	//console.log(props);
	return (
		<TabPane tabId={props.num}>
			<div className="pb-5">
				<Card className="pt-3">
					<CardHeader className="mb-3">
						<Row className=" pr-3 pl-3">
							<Col md={10} className="text-dark fc text-center h1">
								Add {props.name}
							</Col>
							{props.name !== 'Summary' ? (
								<Col md={2} style={{ paddingRight: '35px', textAlign: 'right' }}>
									<span
										onClick={() => {
											props.add();
										}}>
										<BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
									</span>
								</Col>
							) : null}
						</Row>
					</CardHeader>
					<CardBody className="justify-content-center">
						{props.name === 'Summary' ? <Summary summary={props.summary} setSummary={props.setSummary} onDelete={props.handleSummaryDelete} /> : null}
						{props.name === 'Education'
							? props.eduArray.map((item, i) => (
									<Education key={item.id} eduArray={props.eduArray} setEduArray={props.setEduArray} education={item} handleDelete={props.handleEduDelete} />
							  ))
							: null}
						{props.name === 'Certifications'
							? props.certArray.map((item, i) => (
									<Certification key={item.id} cert={item} certArray={props.certArray} setCertArray={props.setCertArray} handleDelete={props.handleCertDelete} />
							  ))
							: null}
						{props.name === 'Skills'
							? props.skillsArray.map((item, i) => (
									<Skills key={item.id} skills={item} skillsArray={props.skillsArray} setSkillsArray={props.setSkillsArray} handleDelete={props.handleSkillsDelete} />
							  ))
							: null}
						{props.name === 'Work History'
							? props.workArray.map((item, i) => (
									<Work
										key={item.id}
										work={item}
										descArray={props.descArray}
										workArray={props.workArray}
										setWorkArray={props.setWorkArray}
										addWorkDesc={props.addWorkDesc}
										setDescArray={props.setDescArray}
										handleDescDelete={props.handleDescDelete}
										handleDelete={props.handleWorkDelete}
									/>
							  ))
							: null}
					</CardBody>
				</Card>
			</div>
		</TabPane>
	);
}
