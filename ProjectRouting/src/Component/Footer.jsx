import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
   <div>
  <section className="info_section layout_padding2">
  <div className="container">
    <div className="row info_form_social_row">
      <div className="col-md-8 col-lg-9">
        <div className="info_form">
          <form action>
            <input type="email" placeholder="Enter your email" />
            <button>
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="social_box">
          <a href>
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href>
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href>
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
    <div className="row info_main_row">
      <div className="col-md-6 col-lg-3">
        <div className="info_links">
          <h4>
            Menu
          </h4>
          <div className="info_links_menu">
            <a href="index.html">
              Home
            </a>
            <a href="about.html">
              About
            </a>
            <a href="chocolate.html">
              Chocolates
            </a>
            <a href="testimonial.html">
              Testimonial
            </a>
            <a href="contact.html">
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="info_insta">
          <h4>
            Instagram
          </h4>
          <div className="insta_box">
            <div className="img-box">
              <img src="images/insta-img.png" alt />
            </div>
            <p>
              long established fact that a reader
            </p>
          </div>
          <div className="insta_box">
            <div className="img-box">
              <img src="images/insta-img.png" alt />
            </div>
            <p>
              long established fact that a reader
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="info_detail">
          <h4>
            Company
          </h4>
          <p className="mb-0">
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <h4>
          Contact Us
        </h4>
        <div className="info_contact">
          <a href>
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span>
              Location
            </span>
          </a>
          <a href>
            <i className="fa fa-phone" aria-hidden="true" />
            <span>
              Call +01 1234567890
            </span>
          </a>
          <a href>
            <i className="fa fa-envelope" />
            <span>
              demo@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  <footer classname="container-fluid footer_section">
    <div classname="container">
      <div classname="col-md-11 col-lg-8 mx-auto">
        <p>
          © <span id="displayYear"> All Rights Reserved By
            <navlink to="https://html.design/">Free Html Templates
            </navlink></span></p>
      </div>
    </div>
  </footer>
</div>


  )
}

export default Footer