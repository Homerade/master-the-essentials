import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      notes: []
    };
    this.publishNote = this.publishNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  publishNote(note) {
    this.setState({ notes: [ ...this.state.notes, note ], showCreate: false })
  }

  updateNote(updated) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note === this.state.selectedNote) {
        return updated;
      }
      return note;
    });
    this.setState({
      notes: updatedNotes,
      selectedNote: undefined,
      showEdit: false
    });
  }

  selectNote(note) {
    if (note === this.state.selectedNote) return;
    this.setState({ selectedNote: note, showEdit: true });
  }

  renderCreateButton() {
    if (this.state.showEdit || this.state.showCreate) {
      return null;
    }
    return <button onClick={() => this.setState({ showCreate: true })}>Create Note</button>;
  }

  handleCancel() {
    this.setState({ showEdit: false, showCreate: false, selectedNote: undefined });
  }

  render() {
    return (
      <div className="App container">
        <h1>Welcome</h1>         
        <div className="row">
          {!this.state.showEdit && <Sidebar notes={this.state.notes} select={this.selectNote} />}
          {this.renderCreateButton()}
          {this.state.showEdit && <Editor note={this.state.selectedNote} onSubmit={this.updateNote} onCancel={this.handleCancel} />}
          {this.state.showCreate && <Editor onSubmit={this.publishNote} onCancel={this.handleCancel} />}
        </div>
      </div>
    );
  }
}

export default App;
