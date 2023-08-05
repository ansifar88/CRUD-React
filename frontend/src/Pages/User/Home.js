import React,{ useState } from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { LogoutDetails } from '../../Redux/User/UserSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id,name,email,mobile } = useSelector(state => state.user)
  console.log("Name:", name);
  const handleLogout = async (e) => {
    console.log(localStorage,"its the data")
    localStorage.removeItem("token")
    dispatch(LogoutDetails({
      id :'',
      name :'',
      email :'',
      mobile :''
    }))
  }

  return (
    <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">USER HOME</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
        
          {<Navbar.Text>
            <p className='mt-1'>Signed in as :  <span style={{fontWeight:'bold'}}>{ name }</span></p>
          </Navbar.Text>}
          
      {localStorage.getItem('token') ? (
        
        <Button variant="outline-danger mx-2 rounded-2" onClick={handleLogout}>LOG OUT</Button>
      
        ) : (

        <Button variant="outline-primary mx-2 rounded-2" onClick={()=>navigate('/login')}>LOG IN</Button>
     
        )
      }
      
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Home
