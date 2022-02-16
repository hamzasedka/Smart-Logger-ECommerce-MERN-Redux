import React from 'react'
import { Route } from 'react-router-dom'
import Product from '../components/AdminPages/product/Product'
import ProductList from '../components/AdminPages/productList/ProductList'
import User from '../components/AdminPages/user/User'
import UserList from '../components/AdminPages/userList/UserList'
import BoardAdmin from '../components/BoardAdmin'
import {Routes} from 'react-router-dom'
import Topbar from '../components/AdminComponents/topbar/Topbar'
import Sidebar from '../components/AdminComponents/sidebar/Sidebar'
import AddProduct from '../components/AdminPages/addProduct/AddProduct'

function AdminRoutes() {
  return (
    <>
     <Topbar />
    <Sidebar />
    <Routes>
            <Route  path="/admin" element={<BoardAdmin />} />
             <Route exact path="admin/products" element={<ProductList />}  />
             <Route exact path="admin/users" element={<UserList />}  />
             <Route exact path="admin/updateUser/:user" element={<User />}  />
             <Route exact path="admin/updateProduct/:product" element={<Product />}  />
             <Route exact path="admin/addProduct" element={<AddProduct/>} />
             </Routes>
             </>

  )
}

export default AdminRoutes