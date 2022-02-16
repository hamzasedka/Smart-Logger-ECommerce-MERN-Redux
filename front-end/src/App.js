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
import PublicRoutes from "./Routes/public.routes";
import AdminRoutes from "./Routes/admin.routes";
import UserRoutes from "./Routes/user.routes";


const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router >
      <div >
        <PublicRoutes/>
      
     {currentUser?
     currentUser.roles.includes("ROLE_ADMIN")? <AdminRoutes />:<div></div>:<></>}
     {currentUser?
     currentUser.roles.includes("ROLE_USER")? <UserRoutes />:<div></div>:<></>}
    

            
       
        </div>
      
    </Router>
  );
};
export default App;