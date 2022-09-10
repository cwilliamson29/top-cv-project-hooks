import { Container, Card, CardHeader, Row, CardBody, Col } from 'reactstrap';
import uniqid from 'uniqid';
import ContactInfo from './components/infoComponent';
import Education from './components/educationComponent';

function App() {
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
                                    <ContactInfo />
                                </div>
                                <div className="pb-5">
                                    <Education />
                                </div>
                                <div>Work goes here</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
