import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function Womenshoes() {
    const redirect = useNavigate();

    useEffect(() => {
        fetchData();

    }, []);

    const [data, setdata] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:3000/Product/?prod_cat=${"Women"}`);
        setdata(data);
    };
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><NavLink to="/Index">Home</NavLink></span> / <span>Women</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumbs-two">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumbs-img" style={{ backgroundImage: 'url(images/cover-img-1.jpg)' }}>
                                <h2>Women's</h2>
                            </div>
                            <div className="menu text-center">
                                <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-featured">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <div className="featured">
                                <div className="featured-img featured-img-2" style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
                                    <h2>Casuals</h2>
                                    <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center">
                            <div className="featured">
                                <div className="featured-img featured-img-2" style={{ backgroundImage: 'url(images/women.jpg)' }}>
                                    <h2>Dress</h2>
                                    <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center">
                            <div className="featured">
                                <div className="featured-img featured-img-2" style={{ backgroundImage: 'url(images/item-11.jpg)' }}>
                                    <h2>Sports</h2>
                                    <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-xl-3">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Brand</h3>
                                        <ul>
                                            <li><a href="#">Nike</a></li>
                                            <li><a href="#">Adidas</a></li>
                                            <li><a href="#">Merrel</a></li>
                                            <li><a href="#">Gucci</a></li>
                                            <li><a href="#">Skechers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Size/Width</h3>
                                        <div className="block-26 mb-2">
                                            <h4>Size</h4>
                                            <ul>
                                                <li><a href="#">7</a></li>
                                                <li><a href="#">7.5</a></li>
                                                <li><a href="#">8</a></li>
                                                <li><a href="#">8.5</a></li>
                                                <li><a href="#">9</a></li>
                                                <li><a href="#">9.5</a></li>
                                                <li><a href="#">10</a></li>
                                                <li><a href="#">10.5</a></li>
                                                <li><a href="#">11</a></li>
                                                <li><a href="#">11.5</a></li>
                                                <li><a href="#">12</a></li>
                                                <li><a href="#">12.5</a></li>
                                                <li><a href="#">13</a></li>
                                                <li><a href="#">13.5</a></li>
                                                <li><a href="#">14</a></li>
                                            </ul>
                                        </div>
                                        <div className="block-26">
                                            <h4>Width</h4>
                                            <ul>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">W</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Style</h3>
                                        <ul>
                                            <li><a href="#">Slip Ons</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sandals</a></li>
                                            <li><a href="#">Lace Ups</a></li>
                                            <li><a href="#">Oxfords</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Colors</h3>
                                        <ul>
                                            <li><a href="#">Black</a></li>
                                            <li><a href="#">White</a></li>
                                            <li><a href="#">Blue</a></li>
                                            <li><a href="#">Red</a></li>
                                            <li><a href="#">Green</a></li>
                                            <li><a href="#">Grey</a></li>
                                            <li><a href="#">Orange</a></li>
                                            <li><a href="#">Cream</a></li>
                                            <li><a href="#">Brown</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Material</h3>
                                        <ul>
                                            <li><a href="#">Leather</a></li>
                                            <li><a href="#">Suede</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="side border mb-1">
                                        <h3>Technologies</h3>
                                        <ul>
                                            <li><a href="#">BioBevel</a></li>
                                            <li><a href="#">Groove</a></li>
                                            <li><a href="#">FlexBevel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xl-3">
                            <div className="row row-pb-md">
                                <div className="col-md-3 col-lg-3 mb-4 text-center">
                                    <div className="product-entry border">
                                        {
                                            data.map((value, index) => (
                                                <div key={index} className="col-lg-4" >
                                                    <div className="item" onClick={(e) => redirect(`/view_prod/${value.id}`)} >
                                                       

                                                        <div className="col-md-3" ><img src={value.img_link}  style={{width:"500px",height:"500px"}} />
                                                            <h5>{value.name}</h5>
                                                            <h3>{value.des}</h3>
                                                            <span>{value.price}</span>
                                                        </div>


                                                    </div>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#"><i className="ion-ios-arrow-back" /></a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#"><i className="ion-ios-arrow-forward" /></a></li>
                                    </ul>
                                </div>
                            </div>
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

export default Womenshoes