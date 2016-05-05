import React from 'react';
import coolImage from '../images/img_1.jpg';

export default class Skill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    if(this.state.editing) {
      return this.renderEdit();
    }
    return this.renderSkill();
  }

  renderEdit = () => {
    return (
      <input type="text"
      ref={
        element => element ?
        element.selectionStart = this.props.name.length :
        null
      }
      autoFocus={true}
      defaultValue={this.props.name}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
    );
  };

  renderSkill = () => {
    const onDelete = this.props.onDelete;

    return (
      <div className="fh5co-desc" onClick={this.edit}>
        <a href={coolImage} class="image-popup fh5co-board-img" title="">
          <img src={coolImage} alt="" />
        </a>
        <span className="name">{this.props.name}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };

  renderDelete = () => {
    return <button className="delete-skill" onClick={this.props.onDelete}>X</button>;
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);

      this.setState({
        editing: false
      });
    }
  };
}
