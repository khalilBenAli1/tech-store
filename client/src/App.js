import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import Sidebar from "./Admin/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./component/NavbarComp";
import Login from "./component/Login";
import Register from "./component/Register";



function App() {
const [data,setData]=useState([]);

const user= { isConnected: false}





  return (
    <div className="App">
      <Router>
        <Routes>

        
          
         
       <Route exact path="/"  index element={< NavbarComp />} />

          {/* TODO: change the main view to the home page then add a route to the admin with /admin */}
          <Route path="/admin" element={ <Admin/>} />
       

        </Routes>
      </Router>
    </div>
  );
}

export default App;
