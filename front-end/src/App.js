import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Home from "./components/Home";
import Register from "./components/Register";
import Sidebar from "./components/AdminComponents/sidebar/Sidebar"
import User from "./components/AdminPages/user/User"
import Product from "./components/AdminPages/product/Product"

import ProductList from "./components/AdminPages/productList/ProductList"


import { clearMessage } from "./Redux/actions/messages";
import { history } from "./helpers/history";
import NavBar from "./layouts/NavBar";
import UserList from "./components/AdminPages/userList/UserList";
import Topbar from "./components/AdminComponents/topbar/Topbar";


const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <div >
        {currentUser?
        currentUser.roles.includes("ROLE_ADMIN")?<Sidebar/>:<NavBar />:<NavBar />}
 {currentUser?
        currentUser.roles.includes("ROLE_ADMIN")?<Topbar/>:<></>:<></>}
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/user" element={<BoardUser />} />
            {currentUser? currentUser.roles.includes("ROLE_MODERATOR")?
            <Route exact path="/mod" element={<BoardModerator />} />:< ></>
            :<></>}
           <Route  path="/admin" element={<BoardAdmin />}  >
                 
               
           
            </Route>  
             <Route exact path="admin/products" element={<ProductList />}  />
             <Route exact path="admin/users" element={<UserList />}  />
             <Route exact path="admin/updateUser/:user" element={<User />}  />
             <Route exact path="admin/updateProduct/:product" element={<Product />}  />

            
            </Routes>
        </div>
      
    </Router>
  );
};
export default App;