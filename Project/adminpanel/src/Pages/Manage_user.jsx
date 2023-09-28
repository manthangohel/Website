import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Manage_user() {
    useEffect(() => {
        fetchdata();
    }, []);
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/user");
        setData(res.data);
    }

    const  ondelete=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/user/${id}`);
        fetchdata();
    }
    return (
        <div>
            <div className="row">

                <div className="col-md-10">
                    {/*    Hover Rows  */}
                    <div className="panel panel-default" style={{ marginLeft: 400, marginTop: 170 }}>
                        <div className="panel-heading">
                            Manage User Table
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                       data.map((value,index,entarr)=>{
                                        return(
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            
                                            <td>
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger" style={{ marginLeft: 10 }} onClick={()=> ondelete(value.id)}>Delete</button>
                                            </td>
                                        </tr>
                                        )
                                       })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* End  Hover Rows  */}
                </div>
            </div>
        </div>
    )
}

export default Manage_user