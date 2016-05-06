import React from 'react';
import Skills from './Skills.jsx';

export default class App extends React.Component {
  componentDidMount() {
    $.getJSON('http://localhost:3000/api/v1/skills', (response) => {
      this.setState({ skills: response })
    });
  }

  // getInitialState
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    const skills = this.state.skills;
    return (
      <div className="row">
        <button className="btn btn-primary add-skill" onClick={this.addSkill}>Add Skill</button>
          <Skills skills={skills}
                  onEdit={this.editSkill}
                  onDelete={this.deleteSkill} />
      </div>
    );
  }

  deleteSkill = (id, e) => {
    e.stopPropagation();

    $.ajax({
      url: `http://localhost:3000/api/v1/skills/${id}`,
      type: 'DELETE',
      success: () => {
        // this.removeSkillFromDOM(id);
        this.setState({
          skills: this.state.skills.filter(skill => skill.id !== id)
        });
      }
    });
  };

  editSkill = (id, name) => {
    // Don't modify if trying to set an empty value
    if(!name.trim()) { return; }

    const skills = this.state.skills.map(skill => {
      if(skill.id === id) {
        skill.name = name;

        $.ajax({
          url: `http://localhost:3000/api/v1/skills/${skill.id}`,
          type: 'PUT',
          data: { skill: skill },
          success: () => {
            this.updateSkills(skill);
          }
        });
      }
    });
  };

  updateSkills(skill) {
    const skills = this.state.skills.filter((s) => { return s.id != skill.id });
    skills.push(skill);

    this.setState({ skills: skills });
  }

  addSkill = () => {
    $.ajax({
      url: 'http://localhost:3000/api/v1/skills',
      type: 'POST',
      data: { skill: { name: 'Skill Name', details: 'Skill Details' } },
      success: (skill) => {
        const newState = this.state.skills.concat(skill);
        this.setState({ skills: newState })
      }
    });
  }
}
