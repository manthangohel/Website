import React, {useState} from "react";

export default function Form() {

    const [formvalue, setFormvalue] = useState({
        id:"",
        name:"",
        email:"",
        password:""
    });

    const onchangehandel = (e) => {
        setFormvalue({...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const [data, setData] = useState([]);

    const onsubmithandel =(e) => {
        e.preventDefault();
        setData([...data, formvalue]);
        setFormvalue({...formvalue, name:"", email:"", password:""});
    } 

    const ondelete=(id) => {
        const filterdata = data.filter((value, index,e) => value.id!=id);
        setData(filterdata);
    }



  return (
    <div className="container mt-3">
      <form action="" method="post">

      <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">Name:</label>
          <input type="text" value={formvalue.name} onChange={onchangehandel} className="form-control" id="name" placeholder="Enter name"name="name"/>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" onChange={onchangehandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email"/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" onChange={onchangehandel} value={formvalue.password} className="form-control" id="pwd" placeholder="Enter password" name="password"/>
        </div>
        
        <button type="submit" onClick={onsubmithandel} className="btn btn-primary">Submit</button>
      </form>



      <hr/>
      <h1 className="text-center">All Data</h1>
    <table className="table table-bordered">
    <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Delete</th>
        </tr>
    </thead>
    <tbody>
    {
        data && data.map((value, index, entarr) => {

            return (
                <tr key={index}>
                    <th>{value.id}</th>
                    <th>{value.name}</th>
                    <th>{value.email}</th>
                    <th>{value.password}</th>
                    <th><button onClick={()=>ondelete(value.id)}>Delete</button></th>
                </tr>
            )
        })
    }
    </tbody>
    </table>

    </div>
  );
}