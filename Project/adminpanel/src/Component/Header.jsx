import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <NavLink className="navbar-brand" to=" ">COMPANY NAME</NavLink>
        </div>
        <div className="header-right">
          <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
          <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>
          <NavLink to="/Login" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></NavLink>
        </div>
      </nav>
      {/* /. NAV TOP  */}
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <div className="user-img-div">
                <img src="assets/img/user.png" className="img-thumbnail" />
                <div className="inner-text">
                  Jhon Deo Alex
                  <br />
                  <small>Last Login : 2 Weeks Ago </small>
                </div>
              </div>
            </li>
            <li>
              <NavLink className="active-menu" to="/Dashboard"><i className="fa fa-dashboard " />Dashboard</NavLink>
            </li>
            <li>
              <NavLink to=" "><i className="fa fa-desktop " />Category <span className="fa arrow" /></NavLink>
              <ul class="nav nav-second-level">




                <li><NavLink to="/Add_categories"><i className="fa-solid fa-folder-open" />Add Category</NavLink></li>


                <li><NavLink to="/Manage_categories"><i className="fa fa-bell " />Manage category</NavLink></li>

              </ul>
            </li>


            <li>
              <NavLink to=" "><i className="fa fa-desktop " />Product <span className="fa arrow" /></NavLink>
            </li>
            <ul className="nav nav-second-level">
              <li>
                <NavLink to="/Add_manp"><i className="fa-solid fa-folder-open" />Add Man Product</NavLink>
              </li>
              <li>
                <NavLink to="/Manage_manp"><i className="fa fa-bell " />Manage ManProduct</NavLink>
              </li>
              <li>
                <NavLink to="/Add_women"><i className="fa-solid fa-folder-open" />Add Women Product</NavLink>
              </li>
              <li>
                <NavLink to="/Manage_women"><i className="fa fa-bell " />Manage WomenProduct</NavLink>
              </li>
            </ul>
            <li>
              <NavLink to=" "><i className="fa fa-desktop " />User <span className="fa arrow" /></NavLink>
            </li>
            <ul className="nav nav-second-level">
              <li>
                <NavLink to="/Manage_user"><i className="fa fa-bell " />Manage User</NavLink>
              </li>
            </ul>
            <li>
              <NavLink to=" "><i className="fa fa-desktop " />Contact <span className="fa arrow" /></NavLink>
            </li>
            <ul className="nav nav-second-level">
            <li>
                <NavLink to="/Manage_contact"><i className="fa fa-bell " />Manage Contact</NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>


  )
}

export default Header