import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import uniqid from 'uniqid';
import ContactInfo from './components/infoComponent';
import Summary from './components/summaryComponent';
import Education from './components/educationComponent';
import Certification from './components/certificationComponent';
import Work from './components/workComponent';
import Skills from './components/skillsComponent';
import PreviewValidate from './components/ValidatorComponent';
import classnames from 'classnames';
import ResumeBuilder from './components/printComponent';

function App() {
    const [contact, setContact] = useState({ fname: '', lname: '', email: '', phone: '', loc: '' });
    const [summary, setSummary] = useState('');
    const [eduArray, setEduArray] = useState([]);
    const [certArray, setCertArray] = useState([]);
    const [workArray, setWorkArray] = useState([]);
    const [skillsArray, setSkillsArray] = useState([]);
    const [descArray, setDescArray] = useState([]);
    const [activeTab, setActiveTab] = useState('1');
    const [preview, setPreview] = useState(false);

    useEffect(() => {
        document.title = 'Rob The Resume Builder';
    });

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const addEducation = () => {
        setEduArray([...eduArray, { id: uniqid(), school: '', study: '', major: '', dateFrom: '', dateTo: '' }]);
    };
    const addCert = () => {
        setCertArray([...certArray, { id: uniqid(), cert: '', source: '', date: '' }]);
    };
    const addWork = () => {
        setWorkArray([...workArray, { id: uniqid(), company: '', title: '', dateFrom: '', dateTo: '' }]);
    };

    const addWorkDesc = (itemId) => {
        setDescArray([...descArray, { id: uniqid(), parentId: itemId, text: '' }]);
    };

    const addSkills = () => {
        setSkillsArray([...skillsArray, { id: uniqid(), skill: '', exp: '' }]);
    };

    const handleInfoDelete = () => {
        setContact({ fname: '', lname: '', email: '', phone: '', loc: '' });
    };
    const handleSummaryDelete = () => {
        setSummary('');
    };
    const handleEduDelete = (id) => {
        setEduArray(eduArray.filter((item) => item.id !== id));
    };
    const handleCertDelete = (id) => {
        setCertArray(certArray.filter((item) => item.id !== id));
    };
    const handleWorkDelete = (id) => {
        setWorkArray(workArray.filter((item) => item.id !== id));
    };
    const handleDescDelete = (id) => {
        setDescArray(descArray.filter((item) => item.id !== id));
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
                                        <ContactInfo contact={contact} setContact={setContact} handleDelete={handleInfoDelete} />
                                    </div>
                                    <div className=" pb-5">
                                        <Nav tabs>
                                            <NavItem className="fc">
                                                <NavLink
                                                    className={classnames({ active: activeTab === '1' })}
                                                    onClick={() => {
                                                        toggle('1');
                                                    }}>
                                                    Summary
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
                                                <div className="pb-5">
                                                    <Card className="pt-3">
                                                        <CardHeader className="mb-3">
                                                            <Row className=" pr-3 pl-3">
                                                                <Col md={12} className="text-dark fc text-center h1">
                                                                    Add Summary
                                                                </Col>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody className="justify-content-center">
                                                            <Summary summary={summary} setSummary={setSummary} onDelete={handleSummaryDelete} />
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="2">
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
                                                                <Education key={item.id} eduArray={eduArray} setEduArray={setEduArray} education={item} handleDelete={handleEduDelete} />
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
                                                                    Add Certifications
                                                                </Col>
                                                                <Col md={2} style={{ paddingRight: '35px', textAlign: 'right' }}>
                                                                    <span
                                                                        onClick={() => {
                                                                            addCert();
                                                                        }}>
                                                                        <BsFillPlusCircleFill size="2em" style={{ color: 'green' }} />
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        </CardHeader>
                                                        <CardBody className="justify-content-center">
                                                            {certArray.map((item, i) => (
                                                                <Certification key={item.id} cert={item} certArray={certArray} setCertArray={setCertArray} handleDelete={handleCertDelete} />
                                                            ))}
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="4">
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
                                                                <Skills key={item.id} skills={item} skillsArray={skillsArray} setSkillsArray={setSkillsArray} handleDelete={handleSkillsDelete} />
                                                            ))}
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId="5">
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
                                                                <Work key={item.id} work={item} descArray={descArray} workArray={workArray} setWorkArray={setWorkArray} addWorkDesc={addWorkDesc} setDescArray={setDescArray} handleDescDelete={handleDescDelete} handleDelete={handleWorkDelete} />
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
                    <Button onClick={() => console.log(summary)}>console summary</Button>
                    <Button onClick={() => console.log(contact)}>console contact</Button>
                    <Button onClick={() => console.log(eduArray)}>console education</Button>
                    <Button onClick={() => console.log(certArray)}>console certification</Button>
                    <Button onClick={() => console.log(workArray)}>console work</Button>
                    <Button onClick={() => console.log(descArray)}>console desc</Button>
                </Container>
            </div>
        );
    } else if (preview) {
        return (
            <div>
                <Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
                    <ResumeBuilder contact={contact} setPreview={setPreview} summary={summary} eduArray={eduArray} certArray={certArray} skillsArray={skillsArray} workArray={workArray} />
                    <Button onClick={() => console.log(summary)}>console summary</Button>
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
