import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='editor column column-75'>
        <SimpleMDE 
          onChange={(body) => this.setState({ note: { body } })}
          value=""
          options={{
            autofocus: true
          }}
        />
        <button
          disabled={!this.state.note}
          className='publishBtn'
          onClick={() => this.props.publish(this.state.note)}
        >
          Publish
        </button>
      </div>
    );
  }
}

export default Editor;