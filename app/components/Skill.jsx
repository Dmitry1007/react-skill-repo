import React from 'react';

export default class Skill extends React.Component {
  render() {
    return (
      <div>
        <span className="skill">{this.props.name}</span>
      </div>
    )
  }
}
