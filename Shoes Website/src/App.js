import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import Index from "./Pages/Index";
import Footer from "./Component/Footer";
import Menshoes from "./Pages/Menshoes";
import Womenshoes from "./Pages/Womenshoes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Pages/Profile";



function App() {
  return (
    <div>
     <BrowserRouter>
     <ToastContainer/>
     <Routes>
     <Route path="/Login" element={<><Login/></>}></Route>
     <Route path="/Signup" element={<><Signup/></>}></Route>

      <Route path="/Index" element={<><Header/><Index/><Footer/></>}> </Route>
      <Route path="/Menshoes" element={<><Header/><Menshoes/><Footer/></>}> </Route>
      <Route path="/Womenshoes" element={<><Header/><Womenshoes/><Footer/></>}> </Route>
      <Route path="/About" element={<><Header/><About/><Footer/></>}> </Route>
      <Route path="/Contact" element={<><Header/><Contact/><Footer/></>}> </Route>
      <Route path="/Profile" element={<><Header/><Profile/><Footer/></>}> </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
