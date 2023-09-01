import Class_comp from "./Component/Class_comp";
import Func_comp from "./Component/Func_comp";
import Header from "./Design/Component/Header";
import Footer from "./Design/Component/Footer";
import Activities from "./Design/Pages/Activities";
import Home from "./Design/Pages/Home";
import Train from "./Design/Pages/Train";
import Jsx_comp from "./Jsx/Jsx_comp";


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Mui_comp from "./Jsx/MUI/Mui_comp";
function App() {
  return (
    <div>
     {/* {<Func_comp/>
     <hr/>
     <Class_comp/>
     <hr/>
     <Jsx_comp/>} */}

      {/* <BrowserRouter>
        <Routes>
           <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
           <Route path="/Activities" element={<><Header/><Activities/><Footer/></>}></Route>
           <Route path="/Train" element={<><Header/><Train/><Footer/></>}></Route>
        </Routes>

      </BrowserRouter> */}


{/* <Mui_comp/> */}

     </div>



  );
}

export default App;


