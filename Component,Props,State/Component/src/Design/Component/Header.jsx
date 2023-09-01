import React from 'react'

function Header() {
  return (
    <div>
        <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link container text-dark " href="#" style={{fontSize: 'x-large', fontWeight: 'bolder', fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>wego</a>
        </li>
        <li>
          <i className="fa-solid fa-plane-up fa-xs text-success container" style={{transform: 'rotateZ(45deg)'}} />
        </li>
        <li className="nav-item">
          <a className="nav-link me-4 ms-5 text-dark mt-2" href="websiteBootstrap.html">Flight</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4 ms-5 text-dark mt-2" href="#">Hotels</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4 ms-5 text-dark mt-2" href="Activities.html">Activities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4 ms-5  text-dark mt-2" href="train.html">Trains</a>
        </li>
      </ul> 
      <a href style={{marginLeft: '35%'}}><button className="btn btn-info" type="button">Login</button></a>
      <div id="dropdown">
      </div>
    </div>
  </nav>
</div>
    </div>
  )
}

export default Header


