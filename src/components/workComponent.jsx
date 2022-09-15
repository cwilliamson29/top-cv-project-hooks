import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col, Button } from 'reactstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function WorkHistory(props) {
    const [editing, setEditing] = useState(true);
    const { contact } = useContext(DataContext);

    const setWorkArrayId = (itemId, company, title, dateFrom, dateTo) => {
        let newWorkArray = [];
        props.workArray.map((item, i) => {
            let arr = item;
            if (item.id == itemId) {
                arr = item;
                arr.company = company;
                arr.title = title;
                arr.dateFrom = dateFrom;
                arr.dateTo = dateTo;
                newWorkArray.push(arr);
            } else {
                newWorkArray.push(arr);
            }
        });
        props.setWorkArray(newWorkArray);
    };
    const setWorkDescId = (itemId, value) => {
        let newDescArray = [];
        props.descArray.map((item, i) => {
            let arr = item;

            if (item.id == itemId) {
                arr = item;
                arr.item = value;
                newDescArray.push(arr);
            } else {
                newDescArray.push(arr);
            }
        });
        props.setDescArray(newDescArray);
    };

    if (editing) {
        return (
            <Card className="bg-light text-dark mb-3 border border-info border-2">
                <CardHeader className="bg-dark text-light mb-3">
                    <Row>
                        <Col md={1}>
                            <span
                                onClick={() => {
                                    setEditing(false);
                                }}>
                                <AiFillEye size="2.5em" style={{ color: 'orange' }} />
                            </span>
                        </Col>
                        <Col md={10} className="text-center">
                            Work History
                        </Col>
                        <Col md={1} className="text-end">
                            <span onClick={() => props.handleDelete(props.work.id)}>
                                <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                            </span>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Button onClick={() => console.log(contact)}>console contact</Button>
                    {/*********************BUTTON*******************/}
                    <Row className="pr-5 pl-2">
                        <div className="col-md-2 text-end pb-3">
                            <Label for="school">Company:</Label>
                        </div>
                        <div className="col-md-4 pb-3">
                            <Input
                                type="text"
                                onChange={(e) => setWorkArrayId(props.work.id, e.target.value, props.work.title, props.work.dateFrom, props.work.dateTo)}
                                value={props.work.company}
                                id="company"
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="col-md-2 text-end pb-3">
                            <Label for="study">Job Title:</Label>
                        </div>
                        <div className="col-md-4 pb-3">
                            <Input
                                type="text"
                                onChange={(e) => setWorkArrayId(props.work.id, props.work.company, e.target.value, props.work.dateFrom, props.work.dateTo)}
                                value={props.work.title}
                                id="title"
                                placeholder="Your Title"
                            />
                        </div>

                        <div className="col-md-2 text-end pb-3">
                            <Label for="dateFrom">Date From:</Label>
                        </div>
                        <div className="col-md-4 pb-3">
                            <Input
                                type="text"
                                onChange={(e) => setWorkArrayId(props.work.id, props.work.company, props.work.title, e.target.value, props.work.dateTo)}
                                value={props.work.dateFrom}
                                id="dateFrom"
                                placeholder="September 2017"
                            />
                        </div>

                        <div className="col-md-2 text-end pb-3">
                            <Label for="dateTo">Date To:</Label>
                        </div>
                        <div className="col-md-4 pb-3">
                            <Input
                                type="text"
                                onChange={(e) => setWorkArrayId(props.work.id, props.work.company, props.work.title, props.work.dateFrom, e.target.value)}
                                value={props.work.dateTo}
                                id="dateTo"
                                placeholder="Present"
                            />
                        </div>

                        <div className="col-md-3 text-end pb-3">
                            <Label className="text-dark text-center">
                                Add Job Description{' '}
                                <span
                                    onClick={() => {
                                        props.addWorkDesc(props.work.id);
                                    }}>
                                    <BsFillPlusCircleFill size="1.5em" style={{ color: 'green' }} />
                                </span>
                            </Label>
                        </div>
                        <div className="col-md-10 pb-3">
                            <ul className="row">
                                {props.descArray.map((item, i) => {
                                    if (item.parentId == props.work.id) {
                                        return (
                                            <div key={item.id} className="row">
                                                <div className="col-md-1 pb-3">
                                                    <span onClick={() => props.handleDescDelete(item.id)}>
                                                        <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                                                    </span>
                                                </div>
                                                <div className="col-md-10 pb-3">
                                                    <li>
                                                        <Input
                                                            className="col-md-9"
                                                            type="textarea"
                                                            onChange={(e) => setWorkDescId(item.id, e.target.value)}
                                                            value={item.item}
                                                            id="desc"
                                                            placeholder="Present"
                                                        />
                                                    </li>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </Row>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <Card className="bg-light text-dark mb-3 border-dark">
                <CardHeader className="bg-dark text-light mb-3">
                    <Row>
                        <Col md={1}>
                            <span
                                onClick={() => {
                                    setEditing(true);
                                }}>
                                <AiFillEye size="2.5em" style={{ color: 'orange' }} />
                            </span>
                        </Col>
                        <Col md={10} className="text-center">
                            Work History
                        </Col>
                        <Col md={1} className="text-end">
                            <span onClick={() => props.handleDelete(props.work.id)}>
                                <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                            </span>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Row className="ml-2">
                        <h2>{props.work.company}</h2>
                        <h5 className="ml-c25 fi">
                            {props.work.title} | {props.work.dateFrom} to {props.work.dateTo}
                        </h5>
                        <div>
                            <ul>
                                {props.descArray.map((item, i) => {
                                    if (item.parentId == props.work.id) {
                                        return (
                                            <div key={item.id} className="row">
                                                <div className="col-md-1 pb-3">
                                                    <span onClick={() => props.handleDescDelete(item.id)}>
                                                        <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                                                    </span>
                                                </div>
                                                <div className="col-md-10 pb-3">
                                                    <li key={item.id}>{item.item}</li>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

export default WorkHistory;
