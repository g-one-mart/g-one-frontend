import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from './components/NavBar';
import Route from "./pages/Route";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
  <BrowserRouter>
      <NavBar />
      <Route/>
  </BrowserRouter>
</>

);