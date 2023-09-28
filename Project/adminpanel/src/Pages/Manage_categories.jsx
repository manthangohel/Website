import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Manage_categories() 
{
    useEffect(() => {
        fetchdata();
    }, []);
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/Category");
        setData(res.data);
    }


    const  ondelete=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/Category/${id}`);
        fetchdata();
    }
    return (
        <div className="row">

            <div className="col-md-9">
                {/*    Hover Rows  */}
                <div className="panel panel-default" style={{ marginLeft: 500, marginTop: 170 }}>
                    <div className="panel-heading">
                        Hover Rows
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                       data.map((value,index,entarr)=>{
                                        return(
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger"style={{ marginLeft: 10 }} onClick={()=> ondelete(value.id)}>Delete</button>
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
    )
}

export default Manage_categories