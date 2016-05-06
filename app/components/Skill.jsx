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
      <div className="item">
        <div className="animate-box bounceIn animated">
          <a href={coolImage} className="image-popup fh5co-board-img" title="">
            <img src={coolImage} alt="" />
          </a>
        </div>
        <div className="fh5co-desc" onClick={this.edit}>
          {this.props.name}
        </div>
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
