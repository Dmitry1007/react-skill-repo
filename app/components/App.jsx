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
        <Skills skills={skills} />
      </div>
    );
  }
}
