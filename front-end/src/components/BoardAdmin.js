import React from 'react'
import Topbar from './AdminComponents/topbar/Topbar'
import AdminHome from './AdminPages/home/Home'
import User from './AdminPages/user/User'
import UserList from './AdminPages/userList/UserList'

function BoardAdmin() {
  return (
     <div >
      <Topbar/>
    <AdminHome/>
     </div>
  )
}

export default BoardAdmin