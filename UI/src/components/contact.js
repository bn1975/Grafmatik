import React from 'react';
// import { Link } from 'react-router';

import '../App.css';



class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>
        <h1>Contact</h1>
        { this.props.children }
        </div>
      </div>
    )
  }
}

export default Contact;
