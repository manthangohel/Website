import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {
    const redirect = useNavigate();

    const logout = () => {

        localStorage.removeItem('user')
        localStorage.removeItem('user id')
        toast.success("Logout success")
        return redirect("/Index")
    }



    return (
        <div>
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo"><a href="index.html">Footwear</a></div>
                            </div>
                            <div className="col-sm-5 col-md-3">
                                <form action="#" className="search-wrap">
                                    <div className="form-group">
                                        <input type="search" className="form-control search" placeholder="Search" />
                                        <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-left menu-1">
                                <ul>
                                    <li className=" "><NavLink to="/Index">Home</NavLink></li>

                                    <li className="has-dropdown">
                                        <NavLink to="/Menshoes">Men</NavLink>
                                        <ul className="dropdown">
                                            <li><NavLink to=" ">Product Detail</NavLink></li>
                                            <li><a href="cart.html">Shopping Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="order-complete.html">Order Complete</a></li>
                                            <li><a href="add-to-wishlist.html">Wishlist</a></li>
                                        </ul>
                                    </li>

                                    <li><NavLink to="/Womenshoes">Women</NavLink></li>
                                    <li><NavLink to="/About">About</NavLink></li>
                                    <li><NavLink to="/Contact">Contact</NavLink></li>

                                    {
                                        localStorage.getItem('user') ?
                                            <li className="submenu" >
                                                <a href="javascript:;">
                                                    <i class="fa fa-user" style={{ fontSize: "20px" }}></i><NavLink to="/profile"> Hi, {localStorage.getItem('user')}</NavLink>  </a>
                                                <ul style={{ left: "-5px" }}>
                                                    <li className="" style={{ cursor: "pointer" }} onClick={logout}>Log out</li>
                                                </ul>
                                            </li> :
                                            <li className="submenu" >
                                                <a href="javascript:;"><i class="fa fa-user" style={{ fontSize: "20px" }}></i></a>
                                                <ul style={{ left: "-5px" }}>
                                                    <li className=" "><NavLink to="/login">Login </NavLink></li>
                                                    <li className=" "><NavLink to="/signup">Sign up </NavLink></li>


                                                </ul>
                                            </li>
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header