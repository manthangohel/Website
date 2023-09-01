import React from "react";
function Jsx_comp(){
    let data="Hi i am jsx";  

    const myelement = <h1>I Love JSX!</h1>;
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;

    const myelement2 = (
        <div>
          <h1>I am a Header.</h1>
          <h1>I am a Header too.</h1>
        </div>
      );
      
    const mystyle={fontSize:"20px",color:"red"}
  return (
    <div>
        <h1>{"Hi hello i am document.write"}</h1>
        <hr />
        
        <h1>{data}</h1>
        <hr />

        <h1>{myelement}</h1>
        <hr />

        <h1>{myelement1}</h1>
        <hr />

        <div>
            {myelement2}
        </div>

        <hr />

        <h1 style={mystyle}>Hi i am inline css</h1>
        <hr />

        <h1 style={{textDecoration:"underline",backgroundColor:"yellow"}}>Hi i am again inline css</h1>
    
        <hr />

        <h1 class="mybox">Hi i am External css </h1>
        <h1 className="mybox">Hi i am External css </h1>
    </div>
  )
}

export default Jsx_comp