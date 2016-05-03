import React from 'react';
import $ from 'jquery'
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
      <div>
        <button className="add-skill" onClick={this.addSkill}>Add Skill</button>
        <Skills skills={skills} onEdit={this.editSkill} />
      </div>
    );
  }

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
            // return skill;
          }
        });
      }
    });
    // this.setState({skills});
  };

  updateSkills(skill) {
    const skills = this.state.skills.filter((s) => { return s.id != skill.id });
    skills.push(skill);

    this.setState({ skills: skills });
  }

  addSkill = () => {
    this.setState({
      skills: this.state.skills.concat([{
        name: 'New Name',
        details: 'New Details',
        level: 'ok'
      }])
    });
  }
}
