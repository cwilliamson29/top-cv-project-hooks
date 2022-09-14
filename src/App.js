import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import uniqid from 'uniqid';
import ContactInfo from './components/infoComponent';
import ResumeBuilder from './components/printComponent';
import NavItemRender from './components/tabViews/navItemComponent';
import NavPaneRender from './components/tabViews/navPaneComponent';
import { navData } from './components/tabViews//navData';

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
                                            {navData.map((item, i) => (
                                                <NavItemRender key={uniqid()} num={item.num} name={item.name} activeTab={activeTab} toggle={toggle} />
                                            ))}
                                        </Nav>

                                        <TabContent activeTab={activeTab}>
                                            {navData.map((item, i) => {
                                                if (item.name === 'Summary') {
                                                    return (
                                                        <NavPaneRender
                                                            key={'001'}
                                                            name={item.name}
                                                            num={item.num}
                                                            summary={summary}
                                                            setSummary={setSummary}
                                                            handleSummaryDelete={handleSummaryDelete}
                                                        />
                                                    );
                                                } else if (item.name === 'Education') {
                                                    return (
                                                        <NavPaneRender
                                                            key={'002'}
                                                            name={item.name}
                                                            num={item.num}
                                                            add={addEducation}
                                                            eduArray={eduArray}
                                                            setEduArray={setEduArray}
                                                            education={item}
                                                            handleEduDelete={handleEduDelete}
                                                        />
                                                    );
                                                } else if (item.name === 'Certifications') {
                                                    return (
                                                        <NavPaneRender
                                                            key={'003'}
                                                            name={item.name}
                                                            num={item.num}
                                                            add={addCert}
                                                            cert={item}
                                                            certArray={certArray}
                                                            setCertArray={setCertArray}
                                                            handleCertDelete={handleCertDelete}
                                                        />
                                                    );
                                                } else if (item.name === 'Skills') {
                                                    return (
                                                        <NavPaneRender
                                                            key={'004'}
                                                            name={item.name}
                                                            num={item.num}
                                                            add={addSkills}
                                                            skills={item}
                                                            skillsArray={skillsArray}
                                                            setSkillsArray={setSkillsArray}
                                                            handleSkillsDelete={handleSkillsDelete}
                                                        />
                                                    );
                                                } else if (item.name === 'Work History') {
                                                    return (
                                                        <NavPaneRender
                                                            key={'005'}
                                                            name={item.name}
                                                            num={item.num}
                                                            add={addWork}
                                                            work={item}
                                                            descArray={descArray}
                                                            workArray={workArray}
                                                            setWorkArray={setWorkArray}
                                                            addWorkDesc={addWorkDesc}
                                                            setDescArray={setDescArray}
                                                            handleDescDelete={handleDescDelete}
                                                            handleWorkDelete={handleWorkDelete}
                                                        />
                                                    );
                                                }
                                                return <div></div>;
                                            })}
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
    } else if (preview) {
        return (
            <div>
                <Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
                    <ResumeBuilder
                        contact={contact}
                        setPreview={setPreview}
                        summary={summary}
                        eduArray={eduArray}
                        certArray={certArray}
                        skillsArray={skillsArray}
                        workArray={workArray}
                        descArray={descArray}
                    />
                </Container>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default App;
