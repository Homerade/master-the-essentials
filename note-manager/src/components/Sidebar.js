import React, { Component } from 'react';


class Sidebar extends Component {
  
  renderList() {
    let list = [];
    this.props.notes.forEach((note) => {
      list.push(
        <li onClick={() => this.props.select(note)}>
          { note.body }
        </li>     
      );
    });
    return list
  }

  // newNote() {
  //   noteList.createElement(li) //same as other button (className?) //name of note
  //   noteList.appendChild()
  // }

  render() {
    return (
      <div className="sidebar column column-25">
       <button className='button button'>+ new note</button>
       <ul className='noteList'>
          {this.renderList()}
       </ul> 
      </div>
    );
  }
}

export default Sidebar;