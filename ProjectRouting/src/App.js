import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Index from "./Pages/Index";
import Footer from "./Component/Footer";
import About from "./Pages/About";
import Choclate from "./Pages/Choclate";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import A from "./UseContext/A";
import List from "./List & Hooks/List";
import Hooks from "./List & Hooks/Hooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
        <Route path="/About" element={<><Header/><About/><Footer/></>}></Route>
        <Route path="/Choclate" element={<><Header/><Choclate/><Footer/></>}></Route>
        <Route path="/Testimonial" element={<><Header/><Testimonial/><Footer/></>}></Route>
        <Route path="/Contact" element={<><Header/><Contact/><Footer/></>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <A/> */}
      {/* <List/>
   <hr/>
      <Hooks/> */}

    </div>
  );
}

export default App;
