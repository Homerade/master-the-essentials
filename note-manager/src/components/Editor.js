import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
  };
  this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleBodyChange(change) {
    this.setState({ note: {body: change} })
  }

  componentWillReceiveProps(nextProps) {
    console.log('prop change', { 'this.props': this.props, nextProps })
    if (this.props.noteToEdit !== nextProps.noteToEdit) {
      console.log('noteToEdit prop changed!');
      this.setState({ note: nextProps.noteToEdit });
    }
    
  }

  render() {
    return (
      <div className='editor column column-75'>
      <input type='text' className='titleField' placeholder='Title' />
      <div>
        <SimpleMDE 
          onChange={this.handleBodyChange} // {(change) => this.setState ({ note: { body: change }})
          value={this.state.note.body}
          options={{
            autofocus: true
          }}
        />
      <button className='publishBtn' onClick={() => this.props.publish(this.state.note)}>Publish</button>  
      </div>  
      </div>

    );
  }
}

export default Editor;
