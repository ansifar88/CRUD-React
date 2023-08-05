import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminLogin } from '../../Api/AdminApi';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const[value,setValue] = useState({
        email : '',
        password : ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(value,"vaaal");
        const{ email,password } = value
        if(!email){
            console.log("email needed");
        } else if (!password){
            console.log("password needed");
        }else{
            const response = await AdminLogin(value)
            console.log(response,"admin response");
            if(response.data.status){
                localStorage.setItem("token",response.data.token)
                navigate('/admin/home')
            }

        }

    }
  return (
    <div className='formOuter '>
    <Form className='form col-lg-3' onSubmit={handleSubmit} >
        <h1 className='text-white'>  LOGIN  </h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})}/>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
      <hr />
      
    </Form>
    </div>
  )
}

export default Login
