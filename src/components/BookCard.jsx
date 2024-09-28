import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import getbooks from '../Bookapi/Api';
import '../App.css'

export default function BookCard() {
  const [books,setbooks]=useState([]);
  const [msg,setmsg]=useState(null);
  useEffect(()=>{
    setmsg("Loading...");
    getbooks().then((data)=>{setbooks(data.books);setmsg(null)});
  },[])

  if(msg){
    return(
      <h1 style={{textAlign:'center',marginTop:'20%'}}>Loading...</h1>
    )
  }

  return (
    <div className='row' style={{display:'flex', justifyContent:'space-evenly'}}>
      {
        books.map((d,i)=>{
          return(
            <Card  style={{ width: '21.1rem',margin:'0.7rem', height:'31rem'}}>
            <Card.Img variant="top" style={{width:'100%', height:'18rem'}} src={d.image}/>
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>
                {d.subtitle}
              </Card.Text>
              <Button variant="primary" style={{position:'absolute',bottom:'0', marginTop:'3rem', marginBottom:'0.7rem'}} >View Details</Button>
           
            </Card.Body>
          </Card>
          )
        })
       
}
    </div>
  )
}
