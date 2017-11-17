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
    return list;
  }

  render() {
    return (
      <div className="sidebar column column-25">
        <ul className='noteList'>
          {this.renderList()}
        </ul> 
      </div>
    );
  }
}

export default Sidebar;