import React from 'react'

function Add_women() {
  return (
    <div>
        <div className='row'>
<div className="col-md-6 col-sm-6 col-xs-12" style={{marginLeft: 400,marginTop: 70}}>
         <div className="panel panel-info">
          <div className="panel-heading">
           Add Category Form
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label>Enter Company Name</label>
                <input className="form-control" type="text" />
                <p className="help-block">Help text here.</p>
              </div>
              <div className="form-group">
                <label>Enter Product Name</label>
                <input className="form-control" type="text" />
                <p className="help-block">Help text here.</p>
              </div>
              <div className="form-group">
                <label>Enter Product Image</label>
                <input type="file" className="form-control" name="myFile" accept="image/png, image/jpeg ,image/jpg" />

                
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-info">Add Product </button>
            </form>
          </div>
        </div>
       
        </div>
    </div>
    </div>
  )
}

export default Add_women