import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <>
    <NavBar />
    <Home />
  </>
  
  );

