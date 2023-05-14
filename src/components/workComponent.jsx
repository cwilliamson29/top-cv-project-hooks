import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Col } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { WorkInput } from './utils/workInput';
import WorkDesc from './workDescComponent';

function WorkHistory(props) {
    const { handleWorkDelete } = useContext(DataContext);
    const id = props.work.id;
    const [company, setCompnay] = useState(props.work.company);
    const [title, setTitle] = useState(props.work.title);
    const [dateFrom, setDateFrom] = useState(props.work.dateFrom);
    const [dateTo, setDateTo] = useState(props.work.dateTo);

    return (
        <Card className="bg-light text-dark mb-3 border border-info border-2">
            <CardHeader className="bg-dark text-light mb-3">
                <Row>
                    <Col md={11} className="text-center">
                        Work History
                    </Col>
                    <Col md={1} className="text-end">
                        <span onClick={() => handleWorkDelete(props.work.id)}>
                            <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                        </span>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <Row className="pr-5 pl-2">
                    <WorkInput name={title} setter={setTitle} id={id} type="title" mdSize={10} />
                    <WorkInput name={company} setter={setCompnay} id={id} type="company" mdSize={10} />
                    <WorkInput name={dateFrom} setter={setDateFrom} id={id} type="dateFrom" mdSize={4} />
                    <WorkInput name={dateTo} setter={setDateTo} id={id} type="dateTo" mdSize={4} />
                    <WorkDesc id={props.work.id} />
                </Row>
            </CardBody>
        </Card>
    );
}

export default WorkHistory;
