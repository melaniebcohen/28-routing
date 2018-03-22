'use strict';

// Refactor your <NoteItem /> component so that if the user clicks on the content of a note, it switches to an "edit" view. The requirements for the "default" and "edit" view can be found below:

// Edit View
// display the <NoteUpdateForm /> component and a "cancel" button (this can be implemented as a custom <Modal /> component, if you choose)
// onSubmit or onClick of the cancel button in should switch back to the "default" view

import './_note-item.scss';
import React, { Component } from 'react';

export default class NoteItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  
  // handleClick(e) {
  //   e.preventDefault();
  //   //  onClick the note should be removed from the application state
  // }

  render() {
    return (
      <div className='note-item'>
        <h3>- {this.props.title}:</h3><p>{this.props.content}</p>
        {/* {console.log(this.props.note)}
        <button onClick={this.props.removeNote(this.props.note)} type='submit'>delete note</button> */}
      </div>
    );
  }
}