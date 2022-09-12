import React, { useState } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import uniqid from 'uniqid';
import ContactInfo from './components/infoComponent';
import Education from './components/educationComponent';
import Work from './components/workComponent';
import Skills from './components/skillsComponent';
import classnames from 'classnames';
import ResumeBuilder from './components/printComponent';

function App() {
    const initContact = Object.freeze({ id: uniqid(), fname: '', lname: '', email: '', phone: '' });
    const [contact, setContact] = useState(initContact);
    const [eduArray, setEduArray] = useState([]);
    const [workArray, setWorkArray] = useState([]);
    const [skillsArray, setSkillsArray] = useState([]);
    const [activeTab, setActiveTab] = useState('1');
    const [preview, setPreview] = useState(false);

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const saveInfo = (i1, i2, i3, i4) => {
        setContact({ fname: i1, lname: i2, email: i3, phone: i4 });
    };
    const addEducation = () => {
        setEduArray((eduArray) => [...eduArray, { id: uniqid(), school: '', study: '', major: '', dateFrom: '', dateTo: '' }]);
    };
    const addWork = () => {
        setWorkArray((workArray) => [...workArray, { id: uniqid(), company: '', title: '', dateFrom: '', dateTo: '', desc: '' }]);
    };
    const addSkills = () => {
        setSkillsArray((skillsArray) => [...skillsArray, { id: uniqid(), skill: '', exp: '' }]);
    };

    const saveEducation = (id, i1, i2, i3, i4, i5) => {
        let update = eduArray.map((element, i) => {
            if (element.id === id) {
                return { ...element, school: i1, study: i2, major: i3, dateFrom: i4, dateTo: i5 };
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
    const saveSkills = (id, i1, i2) => {
        let update = skillsArray.map((element, i) => {
            if (element.id === id) {
                return { ...element, skill: i1, exp: i2 };
            }
            return element;
        });
        setSkillsArray(update);
    };

    const handleInfoDelete = (id) => {
        setContact({ fname: '', lname: '', email: '', phone: '' });
    };
    const handleEduDelete = (id) => {
        setEduArray(eduArray.filter((item) => item.id !== id));
    };
    const handleWorkDelete = (id) => {
        setWorkArray(workArray.filter((item) => item.id !== id));
    };
    const handleSkillsDelete = (id) => {
        setSkillsArray(skillsArray.filter((item) => item.id !== id));
    };

    if (!preview) {
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
                                            <Button onClick={() => setPreview(true)} className="bg-primary">
                                                Preview
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className="mx-2">
                                    <div>
                                        <ContactInfo contact={contact} saveInfo={saveInfo} handleDelete={handleInfoDelete} />
                                    </div>
                                    <div className=" pb-5">
                                        <Nav tabs>
                                            <NavItem className="fc">
                                                <NavLink
                                                    className={classnames({ active: activeTab === '1' })}
                                                    onClick={() => {
                                                        toggle('1');
                                                    }}>
                                                    Education
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="fc">
                                                <NavLink
                                                    className={classnames({ active: activeTab === '2' })}
                                                    onClick={() => {
                                                        toggle('2');
                                                    }}>
                                                    Work History
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="fc">
                                                <NavLink
                                                    className={classnames({ active: activeTab === '3' })}
                                                    onClick={() => {
                                                        toggle('3');
                                                    }}>
                                                    Skills
                                                </NavLink>
                                            </NavItem>
                                        </Nav>

                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId="1">
                                                <div className="pb-5">
                                                    <Card className="pt-3">
                                                        <CardHeader className="mb-3">
                                                            <Row className=" pr-3 pl-3">
                                                                <Col md={10} className="text-dark fc text-center h1">
                                                                    Add Education
                                                                </Col>
                                                                <Col md={2} style={{ paddingRight: '35px', textAlign: 'right' }}>
                                                                    <span
                                                                        onClick={() => {
                                                                            addEducation();
                                                                        }}>
                                                                        <BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody className="justify-content-center">
                                                            {eduArray.map((item, i) => (
                                                                <Education key={item.id} education={item} saveEducation={saveEducation} handleDelete={handleEduDelete} />
                                                            ))}
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="2">
                                                <div className="pb-5">
                                                    <Card className="pt-3">
                                                        <CardHeader className="mb-3">
                                                            <Row className=" pr-3 pl-3">
                                                                <Col md={10} className="text-center h1 text-dark fc ">
                                                                    Add Work History
                                                                </Col>
                                                                <Col md={2} style={{ paddingRight: '35px', textAlign: 'right' }}>
                                                                    <span
                                                                        onClick={() => {
                                                                            addWork();
                                                                        }}>
                                                                        <BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody className="justify-content-center">
                                                            {workArray.map((item, i) => (
                                                                <Work key={item.id} work={item} saveWork={saveWork} handleDelete={handleWorkDelete} />
                                                            ))}
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="3">
                                                <div className="pb-5">
                                                    <Card className="pt-3">
                                                        <CardHeader className="mb-3">
                                                            <Row className=" pr-3 pl-3">
                                                                <Col md={10} className="text-center h1 text-dark fc ">
                                                                    Add Skills
                                                                </Col>
                                                                <Col md={2} style={{ paddingRight: '35px', textAlign: 'right' }}>
                                                                    <span
                                                                        onClick={() => {
                                                                            addSkills();
                                                                        }}>
                                                                        <BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody className="justify-content-center">
                                                            {skillsArray.map((item, i) => (
                                                                <Skills key={item.id} skills={item} saveSkills={saveSkills} handleDelete={handleSkillsDelete} />
                                                            ))}
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </TabPane>
                                        </TabContent>
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
    } else if (preview) {
        return (
            <div>
                <Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
                    <ResumeBuilder contact={contact} setPreview={setPreview} />
                    <Button onClick={() => console.log(contact)}>console contact</Button>
                    <Button onClick={() => console.log(eduArray)}>console education</Button>
                    <Button onClick={() => console.log(workArray)}>console work</Button>
                </Container>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default App;
