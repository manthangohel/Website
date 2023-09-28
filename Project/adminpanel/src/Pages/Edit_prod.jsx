import { redirect, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Edit_prod = () => {
   const { id } = useParams();
   const redirect = useNavigate();
   const [formvalue, setformvalue] = useState({
      // id: '',
      name: '',
      des: '',
      price: "",
      img_link: '',
      prod_cat: ''
   });

   useEffect(() => {
      fetchCateData();
      fetchData();
   }, []);

   const [data, setdata] = useState([]);

   const fetchCateData = async () => {
      const res = await axios.get("http://localhost:3000/Category");
      setdata(res.data);

   };

   const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/Product/${id}`);
      setformvalue(res.data);
   };

   const onChangeHandler = (e) => {
      setformvalue({ ...formvalue, [e.target.name]: e.target.value });


   };

   let validation = () => { //checking every field
      var result = true;
      if (formvalue.name == "" || formvalue.name == null) {
         result = false; // further code should not run
         toast.error("Name field is required");
         return false; // for reload
      }

      if (formvalue.des == "" || formvalue.des == null) {
         result = false;
         toast.error("description field is required");
         return false;
      }

      if (formvalue.price == "" || formvalue.price == null) {
         result = false;
         toast.error("price field is required");
         return false;
      }
      if (formvalue.img_link == "" || formvalue.img_link == null) {
         result = false;
         toast.error("img_link field is required");
         return false;
      }

      if (formvalue.prod_cat == "" || formvalue.prod_cat == null) {
         result = false;
         toast.error("product category field is required");
         return false;
      }
      return result;
   };

   const onsubmit = async (e) => {
      e.preventDefault();
      if (validation()) {
         const res = await axios.patch(`http://localhost:3000/Product/${id}`, formvalue);
         // console.log(res);
         if (res.status == 200) {
            toast.success('Product edited succesfully');
            setformvalue({ ...formvalue, name: "", price: "", des: "", img_link: "", prod_cat: "" });

            return redirect("/Manage_manp");

         }

      }

   };
   return (
      <div>
         <div >


            {/* /. NAV SIDE  */}
            <div id="page-wrapper">
               <div id="page-inner">
                  <div classname="row">
                     <div classname="col-md-12">
                        <div className="container mt-3">
                           <h2>Edit Product</h2>
                           <form method='post'>
                              <div style={{ marginBottom: "20px" }}>
                                 <label className="form-label">Product Name:</label>
                                 <input type="text" value={formvalue.name} onChange={onChangeHandler} className="form-control" placeholder="Enter product name" name="name" />
                              </div>
                              <div style={{ marginBottom: "20px" }}>
                                 <label className="form-label">Product Description:</label>
                                 <input type="text" value={formvalue.des} onChange={onChangeHandler} className="form-control" placeholder="Enter product description" name="des" />
                              </div>
                              <div style={{ marginBottom: "20px" }}>
                                 <label className="form-label">Product Price:</label>
                                 <input type="text" value={formvalue.price} onChange={onChangeHandler} className="form-control" placeholder="Enter product price" name="price" />
                              </div>
                              <div style={{ marginBottom: "20px" }}>
                                 <label className="form-label">Product Img Url:</label>
                                 <input type="text" value={formvalue.img_link} onChange={onChangeHandler} className="form-control " style={{ width: "100%" }} placeholder="Enter product price" name="img_link" />
                              </div>
                              <div style={{ marginBottom: "20px" }}>
                                 <label className="form-label">Product Category:</label>

                                 <select name="prod_cat" value={formvalue.prod_cat} onChange={onChangeHandler} id="">
                                    <option value="">Select Categories</option>
                                    {
                                       data.map((value, index) => (
                                          <option key={index} value={value.name}>{value.name}</option>
                                       ))


                                    }
                                 </select>

                              </div>


                              <button type="submit" style={{ outline: "none" }} className="btn btn-primary my-4" onClick={onsubmit}>Save</button>

                           </form>
                        </div>
                     </div>
                  </div>
                  {/* /. ROW  */}
                  <hr />
                  {/* /. ROW  */}
               </div>
               {/* /. PAGE INNER  */}
            </div>
         </div>
      </div>
   );
};

export default Edit_prod;