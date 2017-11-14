import React from 'react';
import {Link} from 'react-router'

const App = React.createClass({
  render() {
    return (
<div>
      <header>
        <div className="header">
          <nav>
            <ul className="nav nav-pills">

              <li><Link to="/home"><h1>home</h1></Link></li>
              <li><Link to="/about"><h1>About</h1></Link></li>
              <li><Link to="/map"><h1>Map</h1></Link></li>
              <li><Link to="/test"><h1>Feed</h1></Link></li>
              <li><Link to="/login"><h1>sign-up/login</h1></Link></li>

            </ul>
          </nav>
        </div>
      </header>

        {this.props.children}

      <div className="footer">
          <p>Footer</p>
        </div>

</div>

    )
  }
})

export default App;
