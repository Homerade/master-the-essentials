import React, { Component } from 'react';
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
    this.publishNote = this.publishNote.bind(this);
  }

  publishNote(note) {
    const noteList = this.state.notes;
    noteList.push(note);
    this.setState({ notes: noteList });
  }

  selectNote(note) {
    if (note === this.state.selectedNote) return;
    this.setState({ selectedNote: note });
  }

  render() {
    return (
      <div className="App container">
        <h1>Welcome</h1>         
        <div className="row">
          <Sidebar notes={this.state.notes} select={this.selectNote} />
          <Editor publish={this.publishNote} />    
        </div>
      </div>  
    );
  }
}

export default App;
