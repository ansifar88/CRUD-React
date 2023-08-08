import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Styles.css'
import { userReg } from '../../Api/UserApi'
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../Redux/User/UserSlice';

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const[value,setValue] = useState({name:'',mobile:'',email:'',password:''})

const handleSubmit = async (e) => {
  e.preventDefault()

  const { email, password } = value

  try {
    if (!email) {
      console.log('Email is required');
    } else if (!password) {
      console.log('password is required');
    } else {
    const response = await userReg(value)

    if(response.data.status){
      localStorage.setItem("token",response.data.token)
      dispatch(setUserDetails({
        id:response.data.user._id,
        name:response.data.user.name,
        email:response.data.user.email,
        mobile:response.data.user.mobile,
        image:response.data.user.image,
      }))
      navigate('/')
    }
  }
  } catch (error) {
    console.log(error.message);
  }

}
  return (
    <div className='formOuter'>
    <Form className='form col-lg-3' onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name' onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile No" name='mobile' onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})} />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
      <hr />
      <Link to={'/login'}>Already have An Account ?</Link>
    </Form>
    </div>
  )
}

export default Signup
