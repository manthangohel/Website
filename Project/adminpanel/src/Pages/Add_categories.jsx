import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';



function Add_categories() {
   const [formvalue, setformvalue] = useState({
      id: "",
      name: '',
   });
   const onChangeHandler = (e) => {
      setformvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });


   };
   let validation = () => {
      var result = true;
      if (formvalue.name == "" || formvalue.name == null) {
         result = false; // further code should not run
         toast.error("Category name is required");
         return false; // for reload
      }

      return result;
   };
   const onsubmit = async (e) => {
      e.preventDefault();
      if (validation()) {
         const res = await axios.post('http://localhost:3000/categories', formvalue);
         // console.log(res);
         if (res.status ==201) {
            toast.success('Category added succesfully')
            setformvalue({...formvalue,name:""})
            
         }

      }

   };
    return (

        <div className='row'>
            <div className="col-md-6 col-sm-6 col-xs-12" style={{ marginLeft: 400, marginTop: 70 }}>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Add Category Form
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Enter Category Name</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} value={formvalue.name} id="email" placeholder="Enter category name" name="name" />
                                <p className="help-block">Help text here.</p>
                            </div>
                            <div className="form-group">
                                <label>Enter SubCategory Name</label>
                                <input className="form-control" type="text" />
                                <p className="help-block">Help text here.</p>
                            </div>
                            <button type="submit" className="btn btn-info">Add Category </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Add_categories