import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
function AddUser() {
    const[value,setValue] = useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    })
    const navigate = useNavigate()
    const {name,email,mobile,password} = value

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!name){
            console.log("name required");
        }else if (!email) {
            console.log('Email is required');
          }else if(!mobile){
            console.log('Mobile is required');
          }
           else if (!password) {
            console.log('password is required');
          } else {
            const response = await AddUser(value)
            if(response.data){
                navigate('/admin/home')
            }
          }
    }
  return (
    <div className=''>
            <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >ADMIN</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    <div className='formOuter1 d-flex justify-content-center align-items-center'>
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
      
    </Form>
    </div>
    </div>
  )
}

export default AddUser
