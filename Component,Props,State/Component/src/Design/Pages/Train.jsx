import React from 'react'

function Train() {
  return (
    <div>
        <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\n    .divv{\n        background-image: url(https://media.istockphoto.com/id/457433171/photo/red-high-speed-train-with-blurred-motion.jpg?s=612x612&w=0&k=20&c=dtaL6VyNhrKhM1-tQIE7OF3WcpVgc9SFEjFVmcOFFLM=);\n        height: 550px;\n        width: 100%;\n        background-size:cover;\n        \n    }\n    \n  " }} />
  <div className="divv container-fluid row col-md-12">
    <h1 style={{textAlign: 'center', color: 'white', marginTop: 200}}>Train Ticket Booking</h1>
  </div>
  <div className="row col-md-9 container bg-light p-3" style={{position: 'absolute', top: '60%', left: '13%'}}>
    <div className="row">
      <div className=" row form-group">
        <input type="text" className="form-control me-5" id="uname" placeholder="From" name="uname" style={{width: 200, height: 60}} />
        <input type="text" className="form-control me-5" id="uname" placeholder="To" name="uname" style={{width: 200, height: 60}} />
        <input type="text" className="form-control" id="uname" placeholder="Date" name="uname" style={{width: 200, height: 60}} />
        <button type="button" className="btn btn-warning" style={{width: 190, height: 60, marginLeft: 50}}>Search</button>
      </div>
    </div>
    <div className="row container col-md-12">
    </div>
  </div>
  <div className="roww container-fluid col-md-12">
    <h3 style={{textAlign: 'center'}}>Official Partner Of IRCTC <i className="fa-solid fa-train-subway fa-xl" style={{color: '#3adf6b', marginLeft: 15}} /> </h3>
  </div><br /><br />
  <div className="row col-md-12">
    <div className="col-md-6">
      <h6 style={{textAlign: 'center'}}>Easy IRCTC Ticket Cancellations &amp; Refund</h6>
      <i className="fa-solid fa-ticket fa-2xl" style={{color: '#3adf6b', marginLeft: '20%'}} />  
      <p style={{marginLeft: '30%', color: 'silver'}}>We give you one-click, hassle free IRCTC train ticket cancellation and<br />refund. Desktop and mobile train ticket booking in just few easy steps.</p>
    </div>
    <div className="col-md-6">
      <h6 style={{textAlign: 'center'}}>High Chances Of Getting Confirm IRCTC Tickets</h6>
      <i className="fa-sharp fa-solid fa-tag fa-2xl" style={{color: '#3adf6b', marginLeft: '20%'}} />
      <p style={{marginLeft: '27%', color: 'silver'}}>With our same train alternates and prediction feature, increase your chances of getting confirm IRCTC train tickets</p>
    </div>
  </div><br /><br />
  <div className="row col-md-12">
    <div className="col-md-6">  
      <h6 style={{marginLeft: '30%'}}>Secured Payment</h6>
      <i className="fa-sharp fa-solid fa-shield-halved fa-2xl" style={{color: '#3adf6b', marginLeft: '20%'}} />
      <p style={{marginLeft: '30%', color: 'silver'}}>Payment on ConfirmTkt is highly secured. You can also make your IRCTC ticket payment with UPI, wallets Paytm, PhonePe, and more.</p>
    </div>
    <div className="col-md-6">
      <h6 style={{marginLeft: '27%'}}>IRCTC Booking And Enquiry 24X7 Customer Support</h6>
      <i className="fa-solid fa-headset fa-2xl" style={{color: '#3adf6b', marginLeft: '20%'}} />
      <p style={{marginLeft: '27%', color: 'silver'}}>Superior customer service. For any IRCTC train enquiry and booking queries get in touch with our 24X7 dedicated support 08068243910</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Train