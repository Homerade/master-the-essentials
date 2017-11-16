import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';


class Editor extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      notes: []
  };
  this.intakeTitle = this.intakeTitle.bind(this);
  this.publishNote = this.publishNote.bind(this);
  }

  intakeTitle(e) {
    this.setState({ title: e.target.value });
  }

  publishNote() {
    const note = {body: this.state.title}; //need to add id to li?
    const noteList = this.state.notes;
    noteList.push(note);
    this.setState({notes: noteList});
  }

  render() {
    return (
      <div className='editor column column-75'>
      <input type='text' className='titleField' onChange={this.intakeTitle} placeholder='Title' />
      <div>
        <SimpleMDE 
          onChange={this.props.change}
          value="hello"
          options={{
            autofocus: true
          }}
        />
      <button className='publishBtn' onClick={this.publishNote}>Publish</button>  
      </div>  
      </div>

    );
  }
}

export default Editor;