import React from 'react';
import { Card, CardHeader, Row, CardBody, Col, TabPane } from 'reactstrap';
import Summary from '../summaryComponent';
import Education from '../educationComponent';
import Certification from '../certificationComponent';
import Work from '../workComponent';
import Skills from '../skillsComponent';
import AddSpan from '../addSpanComponent';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export default function NavPaneRender(props) {
	const { eduArray, certArray, skillsArray, workArray } = useContext(DataContext);

	return (
		<TabPane tabId={props.num}>
			<div className="pb-5">
				<Card>
					<CardHeader className="mb-3">
						<Row className="pr-3 pl-3">
							<Col md={10} className="text-dark fc text-center h1">
								Add {props.name}
							</Col>
							<Col md={1} style={{ paddingRight: '35px', marginTop: '10px', textAlign: 'right' }}>
								<AddSpan name={props.name} />
							</Col>
						</Row>
					</CardHeader>
					<CardBody className="justify-content-center">
						{props.name === 'Summary' ? <Summary /> : null}
						{props.name === 'Education' ? eduArray.map((item, i) => <Education key={item.id} education={item} />) : null}
						{props.name === 'Certifications' ? certArray.map((item, i) => <Certification key={item.id} cert={item} />) : null}
						{props.name === 'Skills' ? skillsArray.map((item, i) => <Skills key={item.id} skills={item} />) : null}
						{props.name === 'Work History'
							? workArray.map((item, i) => (
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
