import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import uniqid from 'uniqid';
import ContactInfo from './components/infoComponent';
import ResumeBuilder from './components/printComponent';
import NavItemRender from './components/tabViews/navItemComponent';
import NavPaneRender from './components/tabViews/navPaneComponent';
import { navData } from './components/tabViews//navData';
import { DataProvider } from './context/DataContext';
import { useContext } from 'react';
import DataContext from './context/DataContext';

function App() {
    const { addEducation } = useContext(DataContext);
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
            <DataProvider>
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
                                                <NavPaneRender name={'Skills'} num={'4'} add={addSkills} skillsArray={skillsArray} setSkillsArray={setSkillsArray} handleSkillsDelete={handleSkillsDelete} />
                                                <NavPaneRender key={'005'} name={'Work History'} num={'5'} add={addWork} descArray={descArray} workArray={workArray} setWorkArray={setWorkArray} addWorkDesc={addWorkDesc} setDescArray={setDescArray} handleDescDelete={handleDescDelete} handleWorkDelete={handleWorkDelete} />
                                            </TabContent>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                    </Container>
                </div>
            </DataProvider>
        );
    } else if (preview) {
        return (
            <div>
                <DataProvider>
                    <Container className="text-dark container-fluid min-vh-100 d-flex flex-column">
                        <ResumeBuilder />
                    </Container>
                </DataProvider>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default App;
