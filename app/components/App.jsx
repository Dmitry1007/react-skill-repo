import React from 'react';
import $ from 'jquery'
import Skills from './Skills.jsx';

export default class App extends React.Component {
  componentDidMount() {
    $.getJSON('https://skill-repo.herokuapp.com/api/v1/skills.json', (response) => {
      this.setState({ skills: response })
      console.log(response)
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
    if(!name.trim()) {
      return;
    }
    const skills = this.state.skills.map(skill => {
      if(skill.id === id && name) {
        skill.name = name;
      }
      return skill;
    });
    this.setState({skills});
  };

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
