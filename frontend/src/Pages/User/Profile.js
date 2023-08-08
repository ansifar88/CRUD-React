import React, { Fragment, useState } from 'react'
import './Styles.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileUpdation } from '../../Api/UserApi';
import { setUserDetails } from '../../Redux/User/UserSlice';

function Profile() {
  const {name,email,mobile,id,image} = useSelector(state => state.user)
  const [photo , setPhoto] = useState(null)
  const dispatch = useDispatch()

    const handleSubmit = async (e) =>{
      e.preventDefault()
      const response = await ProfileUpdation(id,photo)
      console.log(response);
      if(response.data.updated){
        dispatch(setUserDetails({
          id:response.data.data._id,
          name:response.data.data.name,
          email:response.data.data.email,
          mobile:response.data.data.mobile,
          image:response.data.data.image,
        }))
      }else{
        console.log("no response");
      }
    };
  return (
    <Fragment>
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">USER HOME</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      
        {/* <Navbar.Text>
          Signed in as: <p><span style={{fontWeight:'bold'}}>{ name }</span></p>
        </Navbar.Text> */}
        

    
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div className='d-flex justify-content-center align-items-center'>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image ? `/images/${image}` : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{email}</ListGroup.Item>
        <ListGroup.Item>{mobile}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
      <input type="file" accept="image/*" onChange={(e)=>{setPhoto(e.target.files[0])}} />
      <Button variant="outline-primary my-2" onClick={handleSubmit} >ADD PHOTO</Button>
      </Card.Body>
    </Card>
    </div>
    </Fragment>
  )
}

export default Profile
