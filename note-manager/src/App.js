import React, { Component } from 'react';

import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
    this.publishNote = this.publishNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }

  publishNote(note) {
    this.setState({ notes: [...this.state.notes, note] })
  }

  selectNote(note) {
    console.log('select note', note);
    if (note === this.state.selectedNote) return;
    this.setState({selectedNote: note});
  }

  render() {
    return (
      <div className="App container">
      <h1>Welcome</h1>         
        <div className="row">
          <Sidebar notes={this.state.notes} select={this.selectNote}/>
          <Editor publish={this.publishNote} noteToEdit={this.state.selectedNote}/>          
        </div>
      </div>  
    );
  }
}

export default App;
