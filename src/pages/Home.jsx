import React, { useContext, useEffect } from 'react'
import { Firebasecontext} from '../firebase/config'
import { useNavigate } from 'react-router-dom';
import Nav1 from '../components/Nav1';
import BookCard from '../components/BookCard';
import '../App.css';

export default function Home() {
    const context = useContext(Firebasecontext);

    const nav = useNavigate();

    useEffect(()=>{
        context.setclick('home');
        context.isuser();
        if(context.useris===null){
            return(
                nav('/signin')
            )
        }
    },[context,nav])
   

  return (
    <div>
        <Nav1 context={context}></Nav1>
        <BookCard></BookCard>
        
    </div>

  )

}
