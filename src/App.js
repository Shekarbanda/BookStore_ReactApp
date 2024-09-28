
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Signup from './pages/Signup';
import { Firebasecontext } from './firebase/config';
import { useNavigate } from 'react-router-dom';

function App() {
  const nav = useNavigate();
 useEffect(()=>{
  nav('/signup');
 },[])
  return (
    <div>
      
    </div>
  );
}

export default App;
