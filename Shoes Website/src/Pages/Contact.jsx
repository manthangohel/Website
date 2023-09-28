import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Contact() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const validation = () => {
        var result = true;
        if (formvalue.firstname == "" || formvalue.firstname == null) {
            result = false;
            alert('Firstname Is Required');
            return false;
        }
        if (formvalue.lastname == "" || formvalue.lastname == null) {
            result = false;
            alert('lastname Is Required');
            return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            alert('email Is Required');
            return false;
        }
        if (formvalue.subject == "" || formvalue.subject == null) {
            result = false;
            alert('subject Is Required');
            return false;
        }
        if (formvalue.message == "" || formvalue.message == null) {
            result = false;
            alert('message Is Required');
            return false;
        }
        return result;
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/Contact`, formvalue);
            if (res.status == 201) {
                setFormvalue({ ...formvalue, firstname: "", lastname: "", email: "", subject: "", message: "" });
                alert('insert success');
                return false;
            }
        }
    }
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><a href="index.html">Home</a></span> / <span>Contact</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="colorlib-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Contact Information</h3>
                            <div className="row contact-info-wrap">
                                <div className="col-md-3">
                                    <p><span><i className="icon-location" /></span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
                                </div>
                                <div className="col-md-3">
                                    <p><span><i className="icon-phone3" /></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                                <div className="col-md-3">
                                    <p><span><i className="icon-paperplane" /></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                </div>
                                <div className="col-md-3">
                                    <p><span><i className="icon-globe" /></span> <a href="#">yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-wrap">
                                <h3>Get In Touch</h3>
                                <form action="" className="contact-form" method='post'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="fname">First Name</label>
                                                <input type="text" name="firstname" id="fname" onChange={onchangehandel} value={formvalue.firstname} className="form-control" placeholder="Your firstname" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="lname">Last Name</label>
                                                <input type="text" name="lastname" id="lname" onChange={onchangehandel} value={formvalue.lastname} className="form-control" placeholder="Your lastname" />
                                            </div>
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" name="email" id="email" onChange={onchangehandel} value={formvalue.email} className="form-control" placeholder="Your email address" />
                                            </div>
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="subject">Subject</label>
                                                <input type="text" name="subject" id="subject" onChange={onchangehandel} value={formvalue.subject} className="form-control" placeholder="Your subject of this message" />
                                            </div>
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" id="message" onChange={onchangehandel} value={formvalue.message} cols={30} rows={10} className="form-control" placeholder="Say something about us" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="w-100" />
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="submit" onClick={onsubmit} defaultValue="Send Message" className="btn btn-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="map" className="colorlib-map" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact