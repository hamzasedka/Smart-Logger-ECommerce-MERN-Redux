import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import CheckCircle from "@material-ui/icons/CheckCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getUsers} from "../../../Redux/actions/userActions/user"

export default function UserList() {
  const Users=useSelector(state=>state.users);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getUsers())
     

  }, [])
 
  const handleDelete = (id) => {
    Users.filter((item) => item._id !== id);
  };
  console.log(Users);
  const columns = [
    { field: "id", headerName: "ID", width: 250 , renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row._id}
          </div>
        );
      }, },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.userImage} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
       renderCell: (params) => {
        
        return (
          <div className="productListItem">
           {params.row.status?<div><CheckCircle style={{color:"green"}}/></div>:<div><RemoveCircle style={{color:"red"}}/></div>}
          </div>
        );
      },
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={Users}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
