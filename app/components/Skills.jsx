import React from 'react';
import Skill from './Skill.jsx';

export default ({skills}) => {
  return (
    <ul className="skills">{skills.map(skill =>
      <li className="skill" key={skill.id}>
        <Skill name={skill.name} />
      </li>
    )}</ul>
  );
}
