import React from 'react'

function Index() {
    return (
        <div>
            <div className="sale">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 text-center">
                            <div className="row">
                                <div className="owl-carousel2">
                                    <div className="item">
                                        <div className="col">
                                            <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col">
                                            <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/img_bg_1.jpg" alt="men" className="d-block" style={{ width: '100%'}} />
                        <div className="carousel-caption">
                            <h2>Men Shoes Collection</h2>
                            <p>New Trending Shoes</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/img_bg_2.jpg" alt="Chicago" className="d-block" style={{ width: '100%' }} />
                        <div className="carousel-caption">
                            <h3 style={{marginTop: 10}}>Huge Sale 50% Off</h3>
                            <p style={{color:'black'}}>Big sale sandals</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/img_bg_3.jpg" alt="New York" className="d-block" style={{ width: '100%' }} />
                        <div className="carousel-caption">
                            <h1>New Arrival Up to 30% Off</h1>
                            <p style={{color:'black'}}>New stylish shoes for men</p>
                        </div>
                    </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>


            <div className="colorlib-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-product">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <div className="featured">
                                <a href="#" className="featured-img" style={{ backgroundImage: 'url(images/men.jpg)' }} />
                                <div className="desc">
                                    <h2><a href="#">Shop Men's Collection</a></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 text-center">
                            <div className="featured">
                                <a href="#" className="featured-img" style={{ backgroundImage: 'url(images/women.jpg)' }} />
                                <div className="desc">
                                    <h2><a href="#">Shop Women's Collection</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-product">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                            <h2>Best Sellers</h2>
                        </div>
                    </div>
                    <div className="row row-pb-md">
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Minam Meaghan</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Men's Taja Commissioner</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Russ Men's Sneakers</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-100" />
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-5.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-6.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-7.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-8.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-100" />
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-9.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-10.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-11.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-12.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-100" />
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-13.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-14.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-15.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4 text-center">
                            <div className="product-entry border">
                                <a href="#" className="prod-img">
                                    <img src="images/item-16.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                </a>
                                <div className="desc">
                                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                    <span className="price">$139.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-partner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                            <h2>Trusted Partners</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col partner-col text-center">
                            <img src="images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Index