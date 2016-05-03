import React from 'react';

export default class Skill extends React.Component {
  render() {
    return (
      <div>
        <span className="skill-name">{this.props.name}</span><br/>
        <span className="skill-details">{this.props.details}</span><br/>
        <span className="skill-level">{this.props.level}</span>
      </div>
    )
  }
}
