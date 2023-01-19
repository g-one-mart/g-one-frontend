import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from './components/NavBar'
import Home from './pages/HomePage';
import ProductPage from "./pages/ProductPage"
import Route from "./pages/Route"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <>
    <BrowserRouter>
        <NavBar />
        <Route/>
    </BrowserRouter>
  </>
  
  );

