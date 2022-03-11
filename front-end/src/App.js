import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { clearMessage } from "./Redux/actions/messages";
import { history } from "./helpers/history";

import PublicRoutes from "./Routes/public.routes";
import AdminRoutes from "./Routes/admin.routes";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <PublicRoutes />

        {currentUser ? (
          currentUser.roles.includes("ROLE_ADMIN") ? (
            <AdminRoutes />
          ) : (
            <div></div>
          )
        ) : (
          <></>
        )}
      </div>
    </Router>
  );
};
export default App;
