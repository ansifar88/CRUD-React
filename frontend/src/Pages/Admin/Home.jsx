import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate} from 'react-router-dom';
import { GetUsers,DeleteUser } from '../../Api/AdminApi';

function Home() {
  const navigate = useNavigate()
  const[users,setUsers] = useState([])
  const[searchInput,setSearchInput] = useState('')
  console.log(users,"llllllllllllllllll");

  useEffect(()=>{
    GetUsers().then(response =>{
      const allUsers = response.data.data;
      setUsers(allUsers)
    }).catch(error =>{
      console.error("error receiving users data",error)
    })
  },[])

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchInput.toLowerCase())
  );
const handleDelete = async(userid)=>{

   DeleteUser(userid).then(()=>{
    setUsers(users.filter(user => user._id !== userid))
    console.log("deleted successfulluy");
   }).catch(error => console.error(error))
}
  return (
    <div>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        
          {/* <Navbar.Text>
            Signed in as: <p><span style={{fontWeight:'bold'}}>{ name }</span></p>
          </Navbar.Text> */}
          <Button variant="outline-primary mx-2 rounded-2" >LOG OUT</Button>

      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='mx-5 mt-2'>
    <div className='d-flex justify-content-between align-items-center'>
      <Button variant="outline-success m-2" onClick={()=>navigate('/admin/addUser')}>ADD USER</Button>
      
        <input className="form-control form-control-sm ml-3 h-50 w-25 col-lg-3" type="text" 
        placeholder="Search"
        onChange={handleSearchInputChange}
        id="searchInput"
        value={searchInput}
        aria-label="Search" />
    </div>
    <Table hover variant="light" >
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>

        {filteredUsers.map((user,i) => (

          <tr key={user._id}>
          <td>{i+1}</td>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.mobile}</td>
          <td>{<Button variant='btn btn-outline-primary'onClick={()=>navigate(`/admin/edituser/${user._id}`)}> Edit </Button>}</td>
          <td>{<Button variant='btn btn-danger'onClick={()=>handleDelete(user._id)}> Delete </Button>}</td>
          
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Home
