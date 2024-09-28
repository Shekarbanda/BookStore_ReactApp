import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './firebase/config';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
    <Route path='/signin' element={<Signin></Signin>}/>
    <Route path='/signup' element={<Signup></Signup>}/>
    <Route path='/home' element={<Home></Home>}/>
    <Route path='*' element={<Navigate to='/'/>}/>
    <Route path='/about' element={<About></About>}/>
  </Routes>
  </BrowserRouter>

    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
