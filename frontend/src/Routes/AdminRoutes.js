import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from "../Pages/Admin/Login";
import Home from "../Pages/Admin/Home";
import EditUser from "../Pages/Admin/EditUser";
import AddUser from "../Pages/Admin/AddUser";



function AdminRoutes() {
  return (
    
      <Routes>

        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/edituser/:id" element={<EditUser/>} />
        <Route exact path="/addUser" element={<AddUser/>}/>
        

      </Routes>
   
  )
}

export default AdminRoutes

