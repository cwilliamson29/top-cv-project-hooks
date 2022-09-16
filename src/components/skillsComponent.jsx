import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { SkillInput } from './utils/skillInput';

function Skills(props) {
    const { handleSkillsDelete } = useContext(DataContext);
    const id = props.skills.id;
    const [skill, setSkill] = useState(props.skills.skill);
    const [exp, setExp] = useState(props.skills.exp);

    return (
        <div className="bg-light text-dark mb-3 border border-info border-2">
            <Row className="pr-5 pl-2 pt-2 pb-2">
                <Col md={1}></Col>
                <SkillInput name={skill} setter={setSkill} id={id} type="skill" mdSize={4} />
                <SkillInput name={exp} setter={setExp} id={id} type="exp" mdSize={4} />

                <Col md={2} className="text-end pt-3 text-end">
                    <span onClick={() => handleSkillsDelete(props.skills.id)}>
                        <FaTrashAlt size="1.5em" style={{ color: 'red' }} />
                    </span>
                </Col>
            </Row>
        </div>
    );
}

export default Skills;
