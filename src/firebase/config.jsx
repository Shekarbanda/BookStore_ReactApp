import { initializeApp } from 'firebase/app';
import {  getDatabase, push, ref} from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { createContext, useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyCU_4_qv_eBJtGj0QfRF7paB8dM9nVqAek",
  authDomain: "react-app-dab97.firebaseapp.com",
  projectId: "react-app-dab97",
  storageBucket: "react-app-dab97.appspot.com",
  messagingSenderId: "923054634074",
  appId: "1:923054634074:web:cd99fa1b5bbbe4c8a8d463",
  database: "https://react-app-dab97-default-rtdb.firebaseio.com"
};



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const Firebasecontext = createContext(null);


export const ContextProvider = (props) => {
  const [click,setclick]=useState('home');

  const [useris,setuser]=useState(null);

  function usersignup(email, pass,name) {
    createUserWithEmailAndPassword(auth, email, pass).then((res) => {
      isuser();
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
    }).catch((err) => alert(err));
  }
  
  function putdata(root,data){
    push(ref(database,root),data);
  }

  function usersignin(email,pass){
    signInWithEmailAndPassword(auth,email,pass).then((res)=>setuser(res)).catch((err)=>alert(err));
  }

  function isuser(){
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setuser(user);
        console.log(user)
      }
      else{
        return false;
      }
    })
    
  }

function logout(){
  signOut(auth).then(()=>{
  setuser(null);
}).catch((err)=>
  alert(err));
}

function google(){
  signInWithPopup(auth,provider).then((res)=>{console.log(res);isuser()}).catch((err)=>alert(err));
}

  return (
    <Firebasecontext.Provider value={{usersignup,usersignin,isuser,logout,useris,setuser,putdata,google,click,setclick}}>
      {props.children}
    </Firebasecontext.Provider>
  )
}



