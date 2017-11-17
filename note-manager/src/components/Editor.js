import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note || {}
    };

    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleBodyChange(body) {
    this.setState({ note: { body: body }})
  }

  render() {
    const { note = {} } = this.state;
    return (
      <div className='editor column column-75'>
        <SimpleMDE 
          onChange={(body) => this.setState({ note: { body } })}
          value={note.body}
          options={{
            autofocus: true
          }}
        />
        <button
          disabled={!this.state.note}
          className='publishBtn'
          onClick={() => this.props.onSubmit(this.state.note)}
        >
          Submit
        </button>
        <button onClick={this.props.onCancel}>Cancel</button>
      </div>
    );
  }
}

export default Editor;