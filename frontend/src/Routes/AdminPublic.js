import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminPublic(props) {

    if(localStorage.getItem('AdminToken')) {
        console.log("the public route console");
        return<Navigate to="/admin/home" />
    }
    <Navigate to="admin/login"/>
    return props.children
  
}

export default AdminPublic
