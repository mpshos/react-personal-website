import React from 'react';
import { Media } from 'reactstrap';

import { Skill } from '../types';

type SkillsProps = {
    skills: Skill[]
}

const renderSkill = (skill: Skill) => {
    return (
        <Media tag="li" key={skill.name}>
            <Media left>
                <Media object src={skill.image} width="64" height="64" alt={skill.name} className="mr-3" />
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
    const splitIdx = Math.ceil(skills.length / 2);

    const skillDisplayLeft = skills.slice(0, splitIdx).map(skill => {
        return (
            <Media list>
                {renderSkill(skill)}
            </Media>
        );
    })

    const skillDisplayRight = skills.slice(splitIdx).map(skill => {
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
                <div className="col-md-6">
                    {skillDisplayLeft}
                </div>
                <div className="col-md-6">
                    {skillDisplayRight}
                </div>
            </div>
        </div>
    );

}

export default Skills;