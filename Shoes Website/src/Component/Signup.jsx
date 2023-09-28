import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify'

function Signup() {

  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    id: "",
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: ""

  });

  const onchangehandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }
  const validation = (result) => {
    result = true;

    if (formvalue.firstname == "" || formvalue.firstname == null) {
      result = false;
      toast.error("firstname field is required")
      return false;
    }
    if (formvalue.lastname == "" || formvalue.lastname == null) {
      result = false;
      toast.error("lastname field is required")
      return false;
    }
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      result = false;
      toast.error("mobile field is required")
      return false;
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error("email field is required")
      return false;
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error("password field is required")
      return false;
    }
    return result;
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const ans = await axios.post("http://localhost:3000/user", formvalue);
      console.log(ans);
      if (ans.status == 201) {
        setFormvalue({ ...formvalue, firstname: "", lastname: "", mobile: "", email: "", password: "" });
        toast.success("sig-up success")
        return redirect("/login")
      }
    }

  };
  return (
    <div>
      <div>
        <div className="d-lg-flex half">
          <div className="bg order-1 order-md-2" style={{ backgroundImage: 'url("images/red-shoe-man.jpg")' }} />
          <div className="contents order-2 order-md-1">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7">
                  <h3><strong>SignUp Page</strong></h3>

                  <form action="#" method="post">
                    <div className="form-group first">
                      <label htmlFor="username">First Name</label>
                      <input type="text" name="firstname" onChange={onchangehandel} value={formvalue.firstname} className="form-control" placeholder="Enter Your First Name" id="username" required />
                      <label htmlFor="username">Last Name</label>
                      <input type="text" name="lastname" onChange={onchangehandel} value={formvalue.lastname} className="form-control" placeholder="Enter Your Last Name" id="username" required />

                      <label htmlFor="password">Enter Mobile No</label>
                      <input type="number" name="mobile" onChange={onchangehandel} value={formvalue.mobile} className="form-control" placeholder="Enter Your Mobile Number" id="password" required />
                      <label htmlFor="password">Enter Email Id</label>
                      <input type="email" name="email" onChange={onchangehandel} value={formvalue.email} className="form-control" placeholder="Enter Your EmailId" id="password" required />
                      <label htmlFor="password">Enter password</label>
                      <input type="password" name="password" onChange={onchangehandel} value={formvalue.password} className="form-control" placeholder="Enter Your password" id="password" required />
                    </div>
                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                        <input type="checkbox" defaultChecked="checked" />
                        <div className="control__indicator" />
                      </label>

                    </div>
                    <input type="" onClick={onsubmit} defaultValue="Sign Up" className="btn btn-block btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup