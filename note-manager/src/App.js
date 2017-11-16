import React, { Component } from 'react';

import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      notes: [],
      selectedNote: ''
    };
    this.intakeName=this.intakeName.bind(this);
    this.publishNote=this.publishNote.bind(this);
  }

  intakeName(e) {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  }

  publishNote() {
    const note = {body: this.state.title}; //need to add id to li?
    const noteList = this.state.notes;
    noteList.push(note);
    this.setState({notes: noteList});
  }

  selectNote(note) {
    if (note === this.state.selectedNote) return;
    this.setState({selectedNote: note});
  }

  render() {
    return (
      <div className="App container">
      <h1>Welcome</h1>         
        <div className="row">
          <Sidebar add={this.publishNote} notes={this.state.notes} select={this.selectNote}/>
          <Editor />          
        </div>
      </div>  
    );
  }
}

export default App;
