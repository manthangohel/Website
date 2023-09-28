import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import Login from "./Pages/Login";
import Footer from "./Component/Footer";
import Dashboard from "./Pages/Dashboard";
import Add_manp from "./Pages/Add_manp";
import Manage_manp from "./Pages/Manage_manp";
import Add_women from "./Pages/Add_women";
import Manage_women from "./Pages/Manage_women";
import Add_categories from "./Pages/Add_categories";
import Manage_categories from "./Pages/Manage_categories";
import Manage_user from "./Pages/Manage_user";
import Manage_contact from "./Pages/Manage_contact";
import Edit_prod from "./Pages/Edit_prod";

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/Login" element={<><Login/></>}></Route>
    <Route path="/Dashboard" element={<><Header/><Dashboard/><Footer/></>}></Route>
    <Route path="/Add_manp" element={<><Header/><Add_manp/></>}></Route>
    <Route path="/Manage_manp" element={<><Header/><Manage_manp/></>}></Route>
    <Route path="/Add_women" element={<><Header/><Add_women/></>}></Route>
    <Route path="/Manage_women" element={<><Header/><Manage_women/></>}></Route>
    <Route path="/Add_categories" element={<><Header/><Add_categories/></>}></Route>
    <Route path="/Manage_categories" element={<><Header/><Manage_categories/></>}></Route>
   
    <Route path="/Manage_user" element={<><Header/><Manage_user/></>}></Route>
    <Route path="/Manage_contact" element={<><Header/><Manage_contact/></>}></Route>
    <Route path="/edit_prod/:id" element={<><Header/><Edit_prod/></>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
