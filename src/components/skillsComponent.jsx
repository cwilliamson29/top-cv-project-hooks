import React, { useState } from 'react';
import { Row, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

function Skills(props) {
      const [editing, setEditing] = useState(true);
      const [skill, setSkill] = useState(props.skills.skill);
      const [exp, setExp] = useState(props.skills.exp);

      const save = (id, i1, i2) => {
            props.saveSkills(id, i1, i2);
            setEditing(false);
      };

      if (editing) {
            return (
                  <div className="bg-light text-dark mb-3 border border-info border-2">
                        <Row className="pr-5 pl-2 pt-3">
                              <div className="col-md-1 text-end pb-3">
                                    <span
                                          onClick={() => {
                                                save(props.skills.id, skill, exp);
                                          }}>
                                          <FontAwesomeIcon icon={faFloppyDisk} size="xl" color="orange" />
                                    </span>
                              </div>
                              <div className="col-md-1 text-end pb-3">
                                    <Label for="school">Skill:</Label>
                              </div>
                              <div className="col-md-3 pb-3">
                                    <Input type="text" onChange={(e) => setSkill(e.target.value)} value={skill} placeholder="Your Skill" />
                              </div>

                              <div className="col-md-3 text-end pb-3">
                                    <Label for="study">Years of Experince:</Label>
                              </div>
                              <div className="col-md-3 pb-3">
                                    <Input type="text" onChange={(e) => setExp(e.target.value)} value={exp} placeholder="2 Years" />
                              </div>
                              <div className="col-md-1 text-end pb-3 text-center">
                                    <span onClick={() => props.handleDelete(props.skills.id)}>
                                          <FontAwesomeIcon icon={faTrash} size="xl" color="red" />
                                    </span>
                              </div>
                        </Row>
                  </div>
            );
      } else {
            return (
                  <div className="bg-light text-dark mb-3 border-dark">
                        <Row>
                              <div className="col-md-1 text-end pb-3">
                                    <span
                                          onClick={() => {
                                                setEditing(true);
                                          }}>
                                          <FontAwesomeIcon icon={faFilePen} size="xl" color="darkgreen" />
                                    </span>
                              </div>
                              <div className="col-md-1 text-end pb-3">
                                    <Label for="company">Skill:</Label>
                              </div>
                              <div className="col-md-3 pb-3 fw-bold">
                                    <Label for="company">{skill}</Label>
                              </div>

                              <div className="col-md-3 text-end pb-3">
                                    <Label for="title">Years of Experince:</Label>
                              </div>
                              <div className="col-md-3 pb-3 fw-bold">
                                    <Label for="title">{exp}</Label>
                              </div>
                              <div className="col-md-1 text-end pb-3 text-center">
                                    <span onClick={() => props.handleDelete(props.skills.id)}>
                                          <FontAwesomeIcon icon={faTrash} size="xl" color="red" />
                                    </span>
                              </div>
                        </Row>
                  </div>
            );
      }
}

export default Skills;
