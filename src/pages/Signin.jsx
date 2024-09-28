import React, { useContext, useEffect, useState } from 'react'
import { Firebasecontext } from '../firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import '../App.css'
import Nav1 from '../components/Nav1';


export default function Signin() {
   
    const [email,setemail]= useState(null);
    const [pass,setpass]= useState(null);
    const context = useContext(Firebasecontext);
    const [validated, setValidated] = useState(false);
    context.setclick(null);
  
   const nav = useNavigate();
   useEffect(()=>{
    if(context.useris){
      return(
          nav('/home')
      )
  }
   },[context.useris,nav])
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === true) {
        context.usersignin(email,pass);
      }
      setValidated(true);
    };
    

  return (
    <>
    <Nav1 context={context}></Nav1>
 <div className='form'>
  <h1 className='text-primary'>Sign in </h1>
    <Form noValidate  onSubmit={handleSubmit} validated={validated}>
      <Row className="mb-3 mt-5 m-5">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            defaultValue=""
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            style={{border:"1px solid black"}}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3 mt-5 m-5" >
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            defaultValue=""
            value={pass}
            onChange={(e)=>setpass(e.target.value)}
            style={{border:"1px solid black"}}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 m-5">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          
        />
      </Form.Group>
      <Button type="submit" style={{display:'inline'}} className='mx-5'>Login</Button>
      <h3 style={{display:'inline'}}>Or</h3>
      <Button className='mx-5 mt-1' variant='danger' onClick={context.google}>Signin with Google</Button>
    </Form>
      
      <h3 className='mx-5 mt-5'>Not Registered yet</h3>
      <Link className='mx-5' to='/signup'>signup</Link>
   </div>
      </>
  )
}
