import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>THIS IS HOME</h1>
        <Link to="/images"><h2>GO TO IMAGES?</h2></Link>
        { this.props.children }
      </div>
    )
  }
})

export default App;
