import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from '../Pages/User/Login'
import Signup from "../Pages/User/Signup";
import Home from "../Pages/User/Home";

function UserRoutes (){
    return(
        
        <Routes>
            <Route exact path="/login" element={ <Login/> }/>
            <Route exact path="/signup" element={ <Signup/> }/>
            <Route exact path="/" element={ <Home/> }/>
        </Routes>
    )
}
export default UserRoutes