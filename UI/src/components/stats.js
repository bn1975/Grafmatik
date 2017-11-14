import React from 'react';
import { Link } from 'react-router';

class Stats extends React.Component {
  render() {
    return (
      <div>
        <h1>stats</h1>
        { this.props.children }
      </div>
    )
  }
}

export default Stats;
