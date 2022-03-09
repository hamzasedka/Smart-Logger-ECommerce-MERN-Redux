import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../addProduct/addForm.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  getUsers,
  UpdateUser,
} from "../../../Redux/actions/userActions/user";
import {
  getAllRoles,
  getUserRoles,
} from "../../../Redux/actions/rolesActions/roles";

function AddUser({ userDetail }) {
  const [prevState, setuserInput] = useState({
    username: "",
    userImage: "",
    userPassword: "",
    email: "",
    roles: [],
    status: false,
  });
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.roles);
  const allRoles = useSelector((state) => state.roles);
  useEffect(() => {
    if (userDetail.roles) {
      userDetail.roles.map((roleId) => {
        dispatch(getUserRoles(roleId));
      });
    } else {
      dispatch(getAllRoles());
    }

    let active = document.getElementById("active");
    let disactive = document.getElementById("disactive");

    /*let categoryOption = document.getElementById(userDetail.userCategory);
    console.log(categoryOption);*/

    if (userDetail.userStatus == true) {
      active.setAttribute("selected", "true");
    } else {
      disactive.setAttribute("selected", "true");
    }
    if (userDetail) {
      setuserInput({
        username: userDetail.username,
        userImage: userDetail.userImage,
        password: userDetail.password,
        email: userDetail.email,
        status: userDetail.status,
        roles: userDetail.roles,
      });
    }
  }, []);

  const nameOnChangeHandler = (e) => {
    setuserInput(() => {
      return {
        ...prevState,
        username: e.target.value,
      };
    });
  };
  console.log(prevState);

  const ImageOnChangeHandler = (e) => {
    setuserInput(() => {
      return {
        ...prevState,
        userImage: e.target.value,
      };
    });
  };
  const emailOnChangeHandler = (e) => {
    setuserInput(() => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };
  const rolesOnChangeHandler = (e) => {
    setuserInput(() => {
      return {
        ...prevState,
        roles: e.target.value,
      };
    });
  };
  const StatusOnChangeHandler = (e) => {
    setuserInput(() => {
      return {
        ...prevState,
        status: e.target.value,
      };
    });
  };
  const passwordOnChangeHandler = (e) => {
    setuserInput(() => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };
  const Submituser = () => {
    let confirmAction = window.confirm("Are you sure to execute this action?");
    if (confirmAction) {
      if (userDetail._id) {
        dispatch(UpdateUser(userDetail._id, prevState));
        dispatch(getUsers());
      } else {
        dispatch(addUser(prevState));
        dispatch(getUsers());
      }
    }
  };
  return (
    <form className="FormContainer">
      <div className="row" style={{ padding: "20px" }}>
        <div className="col-md-6">
          <TextField
            fullWidth
            id="Name"
            required
            variant="outlined"
            color="primary"
            value={userDetail ? prevState.username : ""}
            label={userDetail.username ? "" : "UserName"}
            onChange={nameOnChangeHandler}
          />

          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Email"
            required
            variant="outlined"
            color="primary"
            value={userDetail ? prevState.email : ""}
            label={userDetail.email ? "" : "Email"}
            type="email"
            onChange={emailOnChangeHandler}
          />
          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Password"
            required
            variant="outlined"
            color="primary"
            value={userDetail ? prevState.password : ""}
            label={userDetail.email ? "" : "Password"}
            type="password"
            onChange={passwordOnChangeHandler}
          />
        </div>
        <div className="col-md-6">
          <TextField
            fullWidth
            id="Image"
            required
            variant="outlined"
            color="primary"
            value={userDetail ? prevState.userImage : ""}
            label={userDetail.userImage ? "" : "Image Url"}
            onChange={ImageOnChangeHandler}
          />

          <select
            className="browser-default custom-select"
            onChange={StatusOnChangeHandler}
            style={{ marginTop: "10px", height: "56px" }}
          >
            <option disabled>Select Status</option>
            <option id="active" value="true">
              Active
            </option>
            <option id="disactive" value="false">
              Disactive
            </option>
          </select>
        </div>
        <select
          required
          className="browser-default custom-select"
          onChange={rolesOnChangeHandler}
          style={{ marginTop: "10px" }}
        >
          <option selected disabled>
            Choose Category
          </option>
          {userDetail.roles
            ? roles.map((role, index) => (
                <option id={role._id} key={index} value={role._id}>
                  {role.roleName}
                </option>
              ))
            : allRoles.map((role, index) => (
                <option id={role._id} key={index} value={role._id}>
                  {role.roleName}
                </option>
              ))}
        </select>

        <Button
          color="primary"
          variant="outlined"
          style={{ margin: "15px" }}
          onClick={Submituser}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default AddUser;
