import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function WorkHistory(props) {
      const [editing, setEditing] = useState(true);
      const [company, setCompany] = useState('');
      const [title, setTitle] = useState('');
      const [dateFrom, setDateFrom] = useState('');
      const [dateTo, setDateTo] = useState('');
      const [desc, setDesc] = useState('');

      const save = (id, i1, i2, i3, i4, i5) => {
            props.saveWork(id, i1, i2, i3, i4, i5);
            setEditing(false);
      };

      if (editing) {
            return (
                  <Card className="bg-light text-dark mb-3 border border-info border-2">
                        <CardHeader className="bg-dark text-light mb-3">
                              <Row>
                                    <Col md={1}>
                                          <span
                                                onClick={() => {
                                                      save(props.work.id, company, title, dateFrom, dateTo, desc);
                                                }}>
                                                <FontAwesomeIcon icon={faFloppyDisk} size="xl" />
                                          </span>
                                    </Col>
                                    <Col md={10} className="text-center">
                                          Work History
                                    </Col>
                                    <Col md={1} className="text-end">
                                          <span onClick={() => props.handleDelete(props.work.id)}>
                                                <FontAwesomeIcon icon={faTrash} size="xl" />
                                          </span>
                                    </Col>
                              </Row>
                        </CardHeader>
                        <CardBody>
                              <Row className="pr-5 pl-2">
                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="school">Company:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                          <Input type="text" onChange={(e) => setCompany(e.target.value)} value={company} id="company" placeholder="Company Name" />
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="study">Title:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                          <Input type="text" onChange={(e) => setTitle(e.target.value)} value={title} id="title" placeholder="Your Title" />
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="dateFrom">Date From:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                          <Input type="date" onChange={(e) => setDateFrom(e.target.value)} value={dateFrom} id="dateFrom" />
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="dateTo">Date To:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                          <Input type="date" onChange={(e) => setDateTo(e.target.value)} value={dateTo} id="dateTo" />
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="dateTo">Job Description:</Label>
                                    </div>
                                    <div className="col-md-10 pb-3">
                                          <Input type="textarea" onChange={(e) => setDesc(e.target.value)} value={desc} id="desc" />
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
                                                <FontAwesomeIcon icon={faFilePen} size="xl" />
                                          </span>
                                    </Col>
                                    <Col md={10} className="text-center">
                                          Work History
                                    </Col>
                                    <Col md={1} className="text-end">
                                          <span onClick={() => props.handleDelete(props.work.id)}>
                                                <FontAwesomeIcon icon={faTrash} size="xl" />
                                          </span>
                                    </Col>
                              </Row>
                        </CardHeader>
                        <CardBody>
                              <Row>
                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="company">Company:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3 text-end fw-bold">
                                          <Label for="company">{company}</Label>
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="title">Title:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3 text-end fw-bold">
                                          <Label for="title">{title}</Label>
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="dateFrom">Date From:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3 text-end fw-bold">
                                          <Label for="dateFrom">{dateFrom}</Label>
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="dateTo">Date To:</Label>
                                    </div>
                                    <div className="col-md-4 pb-3 text-end fw-bold">
                                          <Label for="dateTo">{dateTo}</Label>
                                    </div>

                                    <div className="col-md-2 text-end pb-3">
                                          <Label for="dateTo">Job Description:</Label>
                                    </div>
                                    <div className="col-md-10 pb-3">
                                          <Label for="dateTo">{desc}</Label>
                                    </div>
                              </Row>
                        </CardBody>
                  </Card>
            );
      }
}

export default WorkHistory;
