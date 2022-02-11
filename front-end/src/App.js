import React, {  useEffect } from "react";
import { useDispatch } from "react-redux";
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

import { clearMessage } from "./Redux/actions/messages";
import { history } from "./helpers/history";
import NavBar from "./layouts/NavBar";


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router history={history}>
      <div >
        <NavBar />
        <div className="container mt-3">
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/user" element={<BoardUser />} />
            <Route exact path="/mod" element={<BoardModerator />} />
            <Route exact path="/admin" element={<BoardAdmin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;