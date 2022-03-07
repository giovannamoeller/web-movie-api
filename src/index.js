import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import './global.css'
 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
 
