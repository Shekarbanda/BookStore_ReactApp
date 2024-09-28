import React, { useContext, useEffect } from 'react'
import Nav1 from '../components/Nav1'
import { Firebasecontext } from '../firebase/config'

export default function About() {
    const context = useContext(Firebasecontext);
    useEffect(()=>{
        context.setclick('about');
    })
    return (
        <div>
            <Nav1 context={context}></Nav1>
            <div className='mt-4'>
            <h1>About us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quos distinctio doloremque 
                rerum, provident aspernatur, fugit facilis odit saepe temporibus quibusdam! Nulla culpa 
                reiciendis totam fugiat repellendus fuga. Temporibus, quidem?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quos distinctio doloremque 
                rerum, provident aspernatur, fugit facilis odit saepe temporibus quibusdam! Nulla culpa 
                reiciendis totam fugiat repellendus fuga. Temporibus, quidem?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quos distinctio doloremque 
                rerum, provident aspernatur, fugit facilis odit saepe temporibus quibusdam! Nulla culpa 
                reiciendis totam fugiat repellendus fuga. Temporibus, quidem?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quos distinctio doloremque 
                rerum, provident aspernatur, fugit facilis odit saepe temporibus quibusdam! Nulla culpa 
                reiciendis totam fugiat repellendus fuga. Temporibus, quidem?</p>
                </div>
        </div>
    )
}
