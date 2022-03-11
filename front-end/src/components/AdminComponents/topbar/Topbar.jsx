import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../../../Redux/actions/authActions/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Topbar({ setShowSideBar, showSideBare }) {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" onClick={() => setShowSideBar(!showSideBare)}>
            <MenuIcon />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone color="white" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <Link to="/login" className="nav-link" onClick={logOut}>
            {" "}
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
