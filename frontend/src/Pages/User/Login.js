import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles.css'
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../Api/UserApi';
import { setUserDetails } from '../../Redux/User/UserSlice';
import { toast,ToastContainer } from 'react-toastify';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const[value,setValue] = useState({
  email : '',
  password : ''
})
const GenerateError = (err) => {
  toast.error(err, {
    position: 'top-center',
    theme: 'colored',
    autoClose: 2000
  });
};
const handleSubmit = async (e) =>{
    e.preventDefault()
    const { email, password } = value
    try {
      if (!email) {
        console.log("no email");
        GenerateError("email is required")
       
      } else if (!password) {
        console.log("no password");
        GenerateError("password is required")
       
      } else {
      
      const response = await UserLogin(value)
      console.log(response,"its the response");
      
      if(response.data.status){
        localStorage.setItem("token",response.data.token)
        dispatch(setUserDetails({
          id : response.data.user._id,
          email : response.data.user.email,
          name : response.data.user.name,
          mobile : response.data.user.mobile,
          image : response.data.user.image,
      }))
      navigate('/')
    }
  }
  } catch (error) {
    console.log(error);
  }


}
  return (
    <div className='formOuter '>
    <Form className='form col-lg-3' onSubmit={handleSubmit}>
        <h1>LOGIN</h1>

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
      <Link to={'/signup'}>Don't Have An Account ?</Link>
    </Form>
    <ToastContainer/>
    </div>
  )
}

export default Login
