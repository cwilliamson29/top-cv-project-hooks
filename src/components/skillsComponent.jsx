import React, { useState } from 'react';
import { Row, Card, CardHeader, CardBody, Label, Input, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function Skills(props) {
      const [editing, setEditing] = useState(true);
      const [skill, setSkill] = useState('');
      const [exp, setExp] = useState('');

      const save = (id, i1, i2) => {
            props.saveSkills(id, i1, i2);
            setEditing(false);
      };
      //saveSkills={saveSkills} handleDelete={handleSkillsDelete}
      if (editing) {
            return (
                  <Card className="bg-light text-dark mb-3 border border-info border-2">
                        <Row>
                              <Col md={1}>
                                    <span
                                          onClick={() => {
                                                save(props.skills.id, skill, exp);
                                          }}>
                                          <FontAwesomeIcon icon={faFloppyDisk} size="xl" />
                                    </span>
                              </Col>
                              <Col md={10} className="text-center">
                                    Work History
                              </Col>
                              <Col md={1} className="text-end">
                                    <span onClick={() => props.handleDelete(props.skills.id)}>
                                          <FontAwesomeIcon icon={faTrash} size="xl" />
                                    </span>
                              </Col>
                        </Row>

                        <Row className="pr-5 pl-2">
                              <div className="col-md-1 text-end pb-3">
                                    <Label for="school">Skill:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="text" onChange={(e) => setSkill(e.target.value)} value={skill} placeholder="Your Skill" />
                              </div>

                              <div className="col-md-3 text-end pb-3">
                                    <Label for="study">Years of Experince:</Label>
                              </div>
                              <div className="col-md-4 pb-3">
                                    <Input type="text" onChange={(e) => setExp(e.target.value)} value={exp} placeholder="2 Years" />
                              </div>
                        </Row>
                  </Card>
            );
      } else {
            return (
                  <Card className="bg-light text-dark mb-3 border-dark">
                        <Row className="ml-2 mr-2">
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

                        <Row>
                              <div className="col-md-1 text-end pb-3">
                                    <Label for="company">Skill:</Label>
                              </div>
                              <div className="col-md-4 pb-3 text-end fw-bold">
                                    <Label for="company">{skill}</Label>
                              </div>

                              <div className="col-md-3 text-end pb-3">
                                    <Label for="title">Years of Experince:</Label>
                              </div>
                              <div className="col-md-4 pb-3 text-end fw-bold">
                                    <Label for="title">{exp}</Label>
                              </div>
                        </Row>
                  </Card>
            );
      }
}

export default Skills;
