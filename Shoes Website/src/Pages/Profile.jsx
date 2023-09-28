import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Profile() {
    const redirect = useNavigate(); //use Navigate

    // for data showing in website
    useEffect(() => {
        if (!(localStorage.getItem('user'))) {
            return redirect('/');


        }
        fetchData();
    }, []);
    const [data_obj, setData] = useState({});
    const fetchData = async () => {
        const id = localStorage.getItem('userid');
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setData(res.data);
        // ############################################
        localStorage.setItem('userid', res.data.id);
        localStorage.setItem('user', res.data.firstname);

    };

    const [formvalue, setFormvalue] = useState({ //use state variable
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: ""
    });

    const onChangeHandle = (e) => { // get the written data
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        // console.log(formvalue);
    };

    const [dataId, set_dataId] = useState(); //to store the id of data we get on clicking edit btn
    const edithandle = async (id) => {// we are using this because ,by clicking this it will reset and get data from server again
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue(res.data);
        set_dataId(res.data.id);


    };

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${dataId}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, firstname: "", lastname: "", email: "", mobile: "", password: "" });
                toast.success("Edit Success");
                fetchData();
            }

        }
    };

    let validation = () => { //checking every field
        var result = true;
        if (formvalue.firstname == "" || formvalue.firstname == null) {
            result = false; // further code should not run
            toast.error("firstname field is required");
            return false; // for reload
        }
        if (formvalue.lastname == "" || formvalue.lastname == null) {
            result = false; // further code should not run
            toast.error("lastname field is required");
            return false; // for reload
        }

        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            toast.error("email field is required");
            return false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            result = false;
            toast.error("mobile field is required");
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            result = false;
            toast.error("password field is required");
            return false;
        }
        return result;
    };



    return (
        <div>
            <section style={{ backgroundColor: '#eee' }}>


                <div className="container py-5 mt-5">
                    <div>

                        {/* The Modal */}
                        <div className="modal " id="myModal" >
                            <div className="modal-dialog  modal-xl">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit profile</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <div className="container mt-3 pb-4">
                                            {/* <h2>Edit Profile</h2> */}
                                            <form action="/action_page.php">
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="name">firstname:</label>
                                                    <input type="text" className="form-control" value={formvalue.firstname} onChange={onChangeHandle} name="firstname" />
                                                </div>
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="name">lastname:</label>
                                                    <input type="text" className="form-control" value={formvalue.lastname} onChange={onChangeHandle} name="lastname" />
                                                </div>


                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" className="form-control" value={formvalue.email} onChange={onChangeHandle} name="email" />
                                                </div>
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="mobile">Mobile:</label>
                                                    <input type="number" className="form-control" value={formvalue.mobile} onChange={onChangeHandle} name="mobile" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="pwd">Password:</label>
                                                    <input type="password" className="form-control" value={formvalue.password}
                                                        onChange={onChangeHandle} name="password" />
                                                </div>

                                                <button type="submit" className="btn btn-primary" onClick={onsubmit} data-bs-dismiss="modal">Save</button>
                                            </form>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <h1 className='text-center mt-5'>User Profile</h1>


                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card mb-4 py-3">
                                <div className="card-body text-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                    <h2 className="my-3">{data_obj.firstname}</h2>
                                    <div className="d-flex justify-content-center mb-1 mt-5">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => edithandle(data_obj.id)}>Edit Profile</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4 py-4 pl-3">
                                <div className="card-body">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-sm-3 py-1">
                                            <h5 className="mb-1">ID</h5>
                                        </div>
                                        <div className="col-sm-9">
                                            <h5 className="text-muted mb-0">{data_obj.id}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 py-1">
                                            <h5 className="mb-1">FirstName</h5>
                                        </div>
                                        <div className="col-sm-9">
                                            <h5 className="text-muted mb-0">{data_obj.firstname}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 py-1">
                                            <h5 className="mb-1">LastName</h5>
                                        </div>
                                        <div className="col-sm-9">
                                            <h5 className="text-muted mb-0">{data_obj.lastname}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 py-1">
                                            <h5 className="mb-1">Mobile</h5>
                                        </div>
                                        <div className="col-sm-9">
                                            <h5 className="text-muted mb-0">{data_obj.mobile}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 py-1">
                                            <h5 className="mb-1">Email</h5>
                                        </div>
                                        <div className="col-sm-9">
                                            <h5 className="text-muted mb-0">{data_obj.email}</h5>
                                        </div>
                                    </div>

                                    <hr />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Profile;;