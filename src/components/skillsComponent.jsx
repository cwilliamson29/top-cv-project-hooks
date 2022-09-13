import React, { useState } from 'react';
import { Row, Label, Input } from 'reactstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';

function Skills(props) {
    const [editing, setEditing] = useState(true);

    const setSkillArrayId = (itemId, skill, exp) => {
        let newSkillArray = [];
        props.skillsArray.map((item, i) => {
            let arr = item;
            if (item.id == itemId) {
                arr = item;
                arr.skill = skill;
                arr.exp = exp;
                newSkillArray.push(arr);
            } else {
                newSkillArray.push(arr);
            }
        });
        props.setSkillsArray(newSkillArray);
    };

    if (editing) {
        return (
            <div className="bg-light text-dark mb-3 border border-info border-2">
                <Row className="pr-5 pl-2 pt-3">
                    <div className="col-md-1 text-end pb-3">
                        <span
                            onClick={() => {
                                setEditing(false);
                            }}>
                            <AiFillEye size="2.5em" style={{ color: 'orange' }} />
                        </span>
                    </div>
                    <div className="col-md-1 text-end pb-3">
                        <Label for="school">Skill:</Label>
                    </div>
                    <div className="col-md-3 pb-3">
                        <Input type="text" onChange={(e) => setSkillArrayId(props.skills.id, e.target.value, props.skills.exp)} value={props.skills.skill} placeholder="Your Skill" />
                    </div>

                    <div className="col-md-3 text-end pb-3">
                        <Label for="study">Years of Experince:</Label>
                    </div>
                    <div className="col-md-3 pb-3">
                        <Input type="text" onChange={(e) => setSkillArrayId(props.skills.id, props.skills.skill, e.target.value)} value={props.skills.exp} placeholder="2 Years or Leave Blank" />
                    </div>
                    <div className="col-md-1 text-end pb-3 text-center">
                        <span onClick={() => props.handleDelete(props.skills.id)}>
                            <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
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
                            <FaPenAlt size="2em" style={{ color: 'darkgreen' }} />
                        </span>
                    </div>
                    <div className="col-md-1 text-end pb-3">
                        <Label for="company">Skill:</Label>
                    </div>
                    <div className="col-md-3 pb-3 fw-bold">
                        <Label for="company">{props.skills.skill}</Label>
                    </div>

                    <div className="col-md-3 text-end pb-3">
                        <Label for="title">Years of Experince:</Label>
                    </div>
                    <div className="col-md-3 pb-3 fw-bold">
                        <Label for="title">{props.skills.exp}</Label>
                    </div>
                    <div className="col-md-1 text-end pb-3 text-center">
                        <span onClick={() => props.handleDelete(props.skills.id)}>
                            <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                        </span>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Skills;
