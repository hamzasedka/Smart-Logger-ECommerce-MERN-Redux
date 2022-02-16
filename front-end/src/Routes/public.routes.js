import React from 'react'
import { useSelector } from 'react-redux';
import {Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import Home from '../components/Home';

import Login from '../components/Login'
import Register from '../components/Register'
import NavBar from '../layouts/NavBar'

function PublicRoutes() {

  return (
      <>
      
    
       <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
        </>
  )
}

export default PublicRoutes