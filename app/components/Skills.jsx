import React from 'react';
import Skill from './Skill.jsx';

export default ({skills, onEdit}) => {
  return (
    <ul className="skills">{skills.map(skill =>
      <li className="skill" key={skill.id}>
        <Skill name={skill.name}
               details={skill.details}
               level={skill.level}
               onEdit={onEdit.bind(null, skill.id)} />
      </li>
    )}</ul>
  );
}
