import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Manage_manp() {
   const redirect = useNavigate();


   useEffect(() => {
      fetchData();

   }, []);

   const [data, setData] = useState([]);

   const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/product");
      setData(res.data);


   };
   const ondelete = async (id) => {
      const res = await axios.delete(`http://localhost:3000/product/${id}`);
      fetchData();

   };

   return (
      <div>
         <div>

            <div >


               {/* /. NAV SIDE  */}
               <div id="page-wrapper">
                  <div id="page-inner">
                     <div classname="row">
                        <div classname="col-md-12">
                           <div className="container mt-3">
                              <h2>Manage Product</h2>
                              <table className="table table-bordered">
                                 <thead>
                                    <tr>
                                       <th >Prod_id</th>
                                       <th >Prod_name</th>
                                       <th  >Prod_desc</th>
                                       <th >Prod_cate</th>
                                       <th >Prod_price</th>
                                       <th >Prod_img</th>
                                       <th width={"13%"} >Action</th>

                                    </tr>
                                 </thead>
                                 <tbody>
                                    {
                                       data.map((value) => {
                                          return (
                                             <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.des}</td>
                                                <td>{value.prod_cat}</td>
                                                <td>{value.price}</td>
                                                <td> <img src={value.img_link} alt="" width={"50px"} /> </td>
                                                <td>
                                                   {/* <button type="button" class="btn btn-primary">Edit</button><span> </span>
                                                   <button type="button" class="btn btn-danger ml-3" onClick={() => ondelete(value.id)} >Delete</button> */}

                                                   <button style={{ outline: "none" }} type="button" class="btn btn-primary"
                                                      onClick={() => redirect(`/edit_prod/${value.id}`)}>Edit</button><span> </span>
                                                   <button style={{ outline: "none" }} type="button" class="btn btn-danger ml-3" onClick={() => ondelete(value.id)} >Delete</button>

                                                </td>
                                             </tr>
                                          );
                                       })
                                    }
                                 </tbody>
                              </table>
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
      </div>
   );
}

export default Manage_manp;