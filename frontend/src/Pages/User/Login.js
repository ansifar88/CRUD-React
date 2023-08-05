import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles.css'
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../Api/UserApi';
import { setUserDetails } from '../../Redux/User/UserSlice';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const[value,setValue] = useState({
  email : '',
  password : ''
})

const handleSubmit = async (e) =>{
    e.preventDefault()
    const { email, password } = value
    try {
      if (!email) {
        console.log("no email");
       
      } else if (!password) {
        console.log("no password");
       
      } else {
      
      const response = await UserLogin(value)
      console.log(response,"its the response");
      
      if(response.data.status){
        localStorage.setItem("token",response.data.token)
        dispatch(setUserDetails({
          id : response.data.user._id,
          email : response.data.user.email,
          name : response.data.user.name
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
    </div>
  )
}

export default Login
