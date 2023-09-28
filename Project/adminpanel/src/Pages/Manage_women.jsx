import React from 'react'

function Manage_women() {
  return (
    <div className="row">
      
        <div className="col-md-9">
          {/*    Hover Rows  */}
          <div className="panel panel-default" style={{marginLeft: 500,marginTop:170}}>
            <div className="panel-heading">
              Hover Rows
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Company</th>
                      <th>Product Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" style={{marginLeft:10}}>Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" style={{marginLeft:10}}>Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" style={{marginLeft:10}}>Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger" style={{marginLeft:10}}>Delete</button>
                      </td>
                    </tr>
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

export default Manage_women