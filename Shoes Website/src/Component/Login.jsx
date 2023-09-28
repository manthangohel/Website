import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify'

function Login() {
  const redirect = useNavigate()

  const [formvalue, setFormvalue] = useState({
    id: "",
    email: "",
    password: "",
  })

  const onhendel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
    // console.log(formvalue)
  }

  const validation = (result) => {
    result = true;
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error('Email field is requied')
      return false;
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error('Password field is requied')
      return false;
    }
    return result;
  }


  const onsubmit = async (e) => {
    e.preventDefault();

    if (validation()) {
      const res = await axios.get(`  http://localhost:3000/user?email=${formvalue.email}`, formvalue)
      console.log(res)

      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          localStorage.setItem("userid", res.data[0].id)
          localStorage.setItem("user", res.data[0].firstname)
          toast.success("login success")
          setFormvalue({ ...formvalue, email: "", password: "" })
          return redirect("/Index")
        }
        else {
          toast.error("Password not found")
          return false;
        }
      }
      else {
        toast.error("Email not found")
        return false;
      }

    }
  }
  return (
    <div>
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{ backgroundImage: 'url("images/red-shoe-man.jpg")' }} />
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>Login to <strong>Continue</strong></h3>

                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" placeholder="your-email@gmail.com" name='email' onChange={onhendel} value={formvalue.email} id="username" />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Your Password" name='password' onChange={onhendel} value={formvalue.password} id="password" />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                      <input type="checkbox" defaultChecked="checked" />
                      <div className="control__indicator" />
                    </label>
                    <span className="ml-auto"><NavLink to="/Signup" className="forgot-pass">Sign Up</NavLink></span>
                  </div>
                  <NavLink to=' '> <input type="" defaultValue="Log In" onClick={onsubmit} className="btn btn-block btn-primary" /></NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login