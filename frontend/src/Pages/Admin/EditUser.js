import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editUserData, userDetails } from '../../Api/AdminApi';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const[value,setValue] =useState({
        name:"",
        email:"",
        mobile:""
    })
    const{id} = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        const userData = async()=>{
            try {
                const response = await userDetails(id)
                setValue({name:response.data.user.name,email:response.data.user.email,mobile:response.data.user.mobile})
                
            } catch (error) {
                console.log(error.message);
            }
        }
        userData()
    },[id])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            
            if(!value.name){
                console.log("name required");
                return
            }else if(!value.email){
                console.log("email required");
                return    
            }else if(!value.mobile){
            console.log("mobile required");
            return
        }else{
            const response = await editUserData(id,value.name,value.email,value.mobile)
            if(response.data.updated){
                navigate('/admin/home')
            }else{
                console.log("something wrong");
            }
        }
    } catch (error) {
        console.log(error.message);
    }
    }
  return (
    <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >ADMIN</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    <div className='formOuter1 d-flex justify-content-center '>
    <Form onSubmit={handleSubmit} className='form col-lg-4 border-0' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label> <span>
        <Form.Control type="text" placeholder="Enter Name" name='name' value={value.name} onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})}/>
        </span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={value.email}  onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile No" name='mobile' value={value.mobile} onChange={(e)=>setValue({...value, [e.target.name] : e.target.value})}/>
      </Form.Group>



      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
      
      
    </Form>
    </div>
    </div>
  )
}

export default EditUser
