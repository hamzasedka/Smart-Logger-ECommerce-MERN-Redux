import React from 'react'
import { Route } from 'react-router-dom'
import BoardUser from '../components/BoardUser'
import {Routes} from 'react-router-dom'

function UserRoutes() {
  return (
    <>
 
      <Routes>
          <Route exact path="/user" element={<BoardUser />} />
      </Routes>
                 
    
    </>
  )
}

export default UserRoutes