import React from 'react'

function Index() {
  return (
    <div>
  <div className="main_body_content">
    <div className="hero_area">
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>
                        Chocolate <br />
                        <span>
                          Yummy
                        </span>
                      </h1>
                      <a href="">
                        <span>
                          Read More
                        </span>
                        <img src="images/white-arrow.png" alt />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ml-auto">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>
                        Chocolate <br />
                        <span>
                          Yummy
                        </span>
                      </h1>
                      <a href="#">
                        <span>
                          Read More
                        </span>
                        <img src="images/white-arrow.png" alt />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ml-auto">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>
                        Chocolate <br />
                        <span>
                          Yummy
                        </span>
                      </h1>
                      <a href="#">
                        <span>
                          Read More
                        </span>
                        <img src="images/white-arrow.png" alt />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ml-auto">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      {/* end slider section */}
    </div>
    {/* about section */}
    <section className="about_section layout_padding ">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About Our Company
                </h2>
              </div>
              <p>
                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their default model text, </p>
              <a href="#">
                <span>
                  Read More
                </span>
                <img src="images/color-arrow.png" alt />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-img.png" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end about section */}
    {/* chocolate section */}
    <section className="chocolate_section ">
      <div className="container">
        <div className="heading_container">
          <h2>
            Our chocolate products
          </h2>
          <p>
            Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their
          </p>
        </div>
      </div>
      <div className="container">
        <div className="chocolate_container">
          <div className="box">
            <div className="img-box">
              <img src="images/chocolate1.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Yummy <span>chocolate</span>
              </h6>
              <h5>
                $5.0
              </h5>
              <a href>
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/chocolate2.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Yummy <span>chocolate</span>
              </h6>
              <h5>
                $5.0
              </h5>
              <a href>
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/chocolate3.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Yummy <span>chocolate</span>
              </h6>
              <h5>
                $5.0
              </h5>
              <a href>
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/chocolate1.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Yummy <span>chocolate</span>
              </h6>
              <h5>
                $5.0
              </h5>
              <a href>
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/chocolate2.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Yummy <span>chocolate</span>
              </h6>
              <h5>
                $5.0
              </h5>
              <a href>
                BUY NOW
              </a>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/chocolate3.png" alt />
            </div>
            <div className="detail-box">
              <h6>
                Yummy <span>chocolate</span>
              </h6>
              <h5>
                $5.0
              </h5>
              <a href>
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end chocolate section */}
    {/* offer section */}
    <section className="offer_section layout_padding">
      <div className="container">
        <div className="box">
          <div className="detail-box">
            <h2>
              Offers on chocolates
            </h2>
            <h3>
              Get 5% Offer <br />
              any Chocolate items
            </h3>
            <a href>
              Buy Now
            </a>
          </div>
          <div className="img-box">
            <img src="images/offer-img.png" alt />
          </div>
        </div>
        <div className="btn-box">
          <a href>
            <span>
              See More
            </span>
            <img src="images/color-arrow.png" alt />
          </a>
        </div>
      </div>
    </section>
    {/* end offer section */}
    {/* client section */}
    <section className="client_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <div className="img-box sub_img-box">
              <img src="images/client-chocolate.png" alt />
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="client_container">
              <div className="heading_container">
                <h2>
                  Testimonial
                </h2>
              </div>
              <div id="customCarousel2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client-img.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <h4>
                          Gero Miliya
                        </h4>
                        <p>
                          long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client-img.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <h4>
                          Gero Miliya
                        </h4>
                        <p>
                          long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client-img.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <h4>
                          Gero Miliya
                        </h4>
                        <p>
                          long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn-box">
                  <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end client section */}
    {/* contact section */}
    <section className="contact_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
            <div className="form_container">
              <div className="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
              <form action>
                <div>
                  <input type="text" placeholder="Full Name " />
                </div>
                <div>
                  <input type="text" placeholder="Phone number" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex ">
                  <button>
                    SEND NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6  px-0">
            <div className="map_container">
              <div className="map">
                <div id="googleMap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end contact section */}
  </div>
</div>

  )
}

export default Index