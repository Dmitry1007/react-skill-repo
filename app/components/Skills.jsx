import React from 'react';
import Skill from './Skill.jsx';

export default ({skills, onEdit, onDelete}) => {
  return (
    <div id="fh5co-board" data-columns="4">{skills.map(skill =>
      <div className="column size-1of4 skill" key={skill.id}>
        <Skill name={skill.name}
         details={skill.details}
         level={skill.level}
         onEdit={onEdit.bind(null, skill.id)}
         onDelete={onDelete.bind(null, skill.id)} />
      </div>
    )}</div>
  );
}
