import React, { useState } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import ContactInfo from './components/infoComponent';
import Education from './components/educationComponent';
import Work from './components/workComponent';

function App() {
    const initContact = Object.freeze({ id: uniqid(), fname: '', lname: '', email: '', phone: '' });
    const [contact, setContact] = useState(initContact);
    const [eduArray, setEduArray] = useState([]);
    const [workArray, setWorkArray] = useState([]);

    const saveInfo = (i1, i2, i3, i4) => {
        setContact({ fname: i1, lname: i2, email: i3, phone: i4 });
    };
    const addEducation = () => {
        setEduArray((eduArray) => [...eduArray, { id: uniqid(), school: '', study: '', dateFrom: '', dateTo: '' }]);
    };
    const addWork = () => {
        setWorkArray((workArray) => [...workArray, { id: uniqid(), company: '', title: '', dateFrom: '', dateTo: '', desc: '' }]);
    };

    const saveEducation = (id, i1, i2, i3, i4) => {
        let update = eduArray.map((element, i) => {
            if (element.id === id) {
                return { ...element, school: i1, study: i2, dateFrom: i3, dateTo: i4 };
            }
            return element;
        });
        setEduArray(update);
    };
    const saveWork = (id, i1, i2, i3, i4, i5) => {
        let update = workArray.map((element, i) => {
            if (element.id === id) {
                return { ...element, company: i1, title: i2, dateFrom: i3, dateTo: i4, desc: i5 };
            }
            return element;
        });
        setWorkArray(update);
    };

    const handleEduDelete = (id) => {
        setEduArray(eduArray.filter((item) => item.id !== id));
    };
    const handleWorkDelete = (id) => {
        setWorkArray(workArray.filter((item) => item.id !== id));
    };

    return (
        <div>
            <Container className="bg-dark text-dark container-fluid min-vh-100 d-flex flex-column fc">
                <Row>
                    <div className="mt-5"></div>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Card className="mb-5">
                            <CardHeader className="text-center h1">CV-Project</CardHeader>
                            <CardBody className="mx-3">
                                <div>
                                    <ContactInfo contact={contact} saveInfo={saveInfo} />
                                </div>
                                <div className="pb-5">
                                    <div className="text-center h1">Add Education</div>
                                    {eduArray.map((item, i) => (
                                        <Education key={item.id} education={item} saveEducation={saveEducation} handleDelete={handleEduDelete} />
                                    ))}
                                    <div className="text-center pt-3">
                                        <Button
                                            className="bg-primary rounded-pill"
                                            onClick={() => {
                                                addEducation();
                                            }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </div>
                                </div>
                                <div className="pb-5">
                                    <div className="text-center h1">Add Work History</div>
                                    {workArray.map((item, i) => (
                                        <Work key={item.id} work={item} saveWork={saveWork} handleDelete={handleWorkDelete} />
                                    ))}

                                    <div className="text-center pt-3">
                                        <Button
                                            className="bg-primary rounded-pill"
                                            onClick={() => {
                                                addWork();
                                            }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Button onClick={() => console.log(contact)}>console contact</Button>
                <Button onClick={() => console.log(eduArray)}>console education</Button>
                <Button onClick={() => console.log(workArray)}>console work</Button>
            </Container>
        </div>
    );
}

export default App;
