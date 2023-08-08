import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminLogin } from '../../Api/AdminApi';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const navigate = useNavigate()
    const[value,setValue] = useState({
        email : '',
        password : ''
    })
    const GenerateError = (err) => {
      toast.error(err, {
        position: 'top-center',
        theme: 'colored',
        autoClose: 3000
      });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const{ email,password } = value
        if(!email){
          GenerateError("Email is required")
            console.log("email needed");
        } else if (!password){
          GenerateError("password is required")
            console.log("password needed");
        }else{
            const response = await AdminLogin(value)
            console.log(response,"admin response");
            if(response.data.status){
                localStorage.setItem("admintoken",response.data.token)
                navigate('/admin/home')
            }

        }

    }
  return (
    <div>
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
    

    <ToastContainer />
    </div>
    </div>
  )
}

export default Login
