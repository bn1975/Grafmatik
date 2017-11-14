//IMPORT REACT DEPENDENCIES
import React from 'react';
import { Link } from 'react-router';
import FStackContainer from './components/FStackContainer';

//IMPORT STYLES & MEDIA
import './App.css';
import can from './can.png';
import splatter from './images/splatter.png';

//CREATE REACT COMPONENT
class App extends React.Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

{/* NAVIGATION */}
<nav className="navbar navbar-default">
  <div className="container-fluid">

    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
  <div className="navbar-header">

      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      <h1 className="grafmatik">Grafmatik</h1>

  </div>

    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
  {/* CHANGE FIRST ITEM IN ALL ROUTES/PAGES */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/user/map">Map</Link></li>
          <li><Link to="/user/feed">Feed</Link></li>
          <li><Link to="/user/profile">Profile</Link></li>

          <li><FStackContainer className="btn" apikey={"ARV97vWyDQ7dZWi5PC4f2z"}/></li>
        </ul>
    </div>
  </div>
</nav>
{/* NAVIGATION */}
<div>
  <img src={splatter} className="splatter" alt={"splat"}/>
</div>
</header>
  <img src={can} className="can" alt={"can"}/>
<div className="bottom"></div>
{/* <FStackContainer apikey={"ARV97vWyDQ7dZWi5PC4f2z"}/> */}
{ this.props.children }

<footer>about / contact</footer>

</div>

    );
  }
}

export default App;
