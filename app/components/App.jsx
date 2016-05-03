import React from 'react';
import $ from 'jquery'
import Note from './Note.jsx';

export default class App extends React.Component {
  componentDidMount() {
    $.getJSON('https://skill-repo.herokuapp.com/api/v1/skills.json', (response) => { console.log(response) });
  }

  render() {
    // return <Note />;
    return <div>Base React Template</div>;
  }
}
