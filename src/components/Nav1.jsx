import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import { Link } from 'react-router-dom';

export default function Nav1(props) {

  
  
  useEffect(()=>{
    const about1 = document.querySelector('.about');
  const home1 = document.querySelector('.home');
    if(props.context.click=='home'){

      home1.style.color = 'black';
      about1.style.color = 'rgba(0,0,0,0.7)';
      
    }
    if(props.context.click=='about'){
      
        about1.style.color = 'black';
        home1.style.color = 'rgba(0,0,0,0.7)';
      }
  },[props.context.click])
  

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" style={{display:'flex',justifyContent:'space-evenly', borderRadius:'10px'}}>
      <Container fluid>
        <Navbar.Brand>Bookstall</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='home' to={'/home'} >Home</Link>
            <Link className='about' to="/about">About Us</Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Education</NavDropdown.Item>
              <NavDropdown.Item >
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Movies
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <NavDropdown title="Profile" id="navbarScrollingDropdown" style={{marginRight:'3rem'}}>
              <NavDropdown.Item>{props.context.useris?props.context.useris.displayName:""}</NavDropdown.Item>
              <NavDropdown.Item >
                {props.context.useris?props.context.useris.email:''}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={props.context.logout}>
                logout
              </NavDropdown.Item>
            </NavDropdown>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
