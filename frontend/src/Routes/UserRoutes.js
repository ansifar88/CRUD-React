import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from '../Pages/User/Login'
import Signup from "../Pages/User/Signup";
import Home from "../Pages/User/Home";
 import Profile from "../Pages/User/Profile";
import UserPublic from "./UserPublic";
import UserProtect from "./UserProtect";

function UserRoutes (){
    return(
        
        <Routes>
            <Route exact path="/login" element={<UserPublic> <Login/> </UserPublic>}/>
            <Route exact path="/signup" element={ <UserPublic><Signup/></UserPublic> }/>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/profile" element={<UserProtect> <Profile/> </UserProtect>} />
        </Routes>
    )
}
export default UserRoutes