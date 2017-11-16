import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';


class NameField extends Component {
  render() {
    return (
      <input className="nameField column column-75" type='text' onChange={this.props.intakeName} placeholder='Give your note a name...'/>

    );
  }
}

export default NameField;