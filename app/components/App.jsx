import React from 'react';
import $ from 'jquery'
import Note from './Note.jsx';

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
    // return <Note />;
    return <div>Base React Template</div>;
  }
}
