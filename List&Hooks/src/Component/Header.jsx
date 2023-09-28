import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
  <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <NavLink className="navbar-brand" to="index.html">
          ChocoLux
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className> </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About"> About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Choclate">Chocolates</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Testimonial">Testimonial</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className="quote_btn-container">
            <form className="form-inline">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
            <a href>
              <i className="fa fa-user" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</div>

  )
}

export default Header