import React from 'react';
import { Media } from 'reactstrap';

import { Skill } from '../types';

type SkillsProps = {
    skills: Skill[]
}

const renderSkill = (skill: Skill) => {
    return (
        <Media tag="li">
            <Media left>
                <Media object src={skill.image} className="mr-3" />
            </Media>
            <Media body>
                <Media heading className="mt-0">
                    {skill.name}
                </Media>
                <p>{skill.text}</p>
            </Media>
        </Media>
    );
}

function Skills({skills}: SkillsProps) {
    const skillDisplay = skills.map(skill => {
        return (
            <Media list>
                {renderSkill(skill)}
            </Media>
        );
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Skills</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {skillDisplay}
                </div>
            </div>
        </div>
    );

}

export default Skills;