import React, { useContext, useState } from 'react'
import { Firebasecontext } from '../firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import '../App.css';


export default function Signup() {
    const [email,setemail]= useState(null);
    const [pass,setpass]= useState(null);
    const [name,setname] = useState(null);
    const context = useContext(Firebasecontext);
    const nav = useNavigate();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === true) {
        context.usersignup(email,pass,name);
      }
      setValidated(true);
    };

    if(context.useris){
        return(
            nav('/home')
        )
    }
  

  return (
    <>
    <div className='form'>
    <h1 className='text-primary'>Registration</h1>
      <Form noValidate  onSubmit={handleSubmit} validated={validated}>
      <Row className="mb-3 mt-5 m-5" >
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your Name"
              defaultValue=""
              value={name}
              onChange={(e)=>setname(e.target.value)}
              style={{border:"1px solid black"}}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-5 m-5">
          <Form.Group as={Col} controlId="validationCustom01">
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
        <Button type="submit" style={{display:'inline'}} className='mx-4'>Sign Up</Button>
        <h3 style={{display:'inline'}}>Or</h3>
        <Button className='mx-4 mt-1' variant='danger' onClick={context.google}>SignUp with Google</Button>
      </Form>
      <h3 className='mx-5 mt-5'>Already a user</h3>
      <Link className='mx-5' to='/signin'>signin</Link>
        </div>
        </>
    );
}
