import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import CheckCircle from "@material-ui/icons/CheckCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DeleteUser, getUsers } from "../../../Redux/actions/userActions/user";
import MaterialTable, { MTableBodyRow } from "@material-table/core";
import tableIcons from "../../../helpers/MaterialTableIcons";
import { Button } from "@material-ui/core";
import AddUser from "../addUser/AddUser";

export default function UserList() {
  const [UserDetails, setUserDetails] = useState({});
  const [ShowAddUser, setShowAddUser] = useState(false);
  const Users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleDelete = (id) => {
    dispatch(DeleteUser(id));
    dispatch(getUsers());
  };
  const getUserDetails = (item) => {
    setUserDetails(item);
    setShowAddUser(!ShowAddUser);
  };
  const toggleShowAddProduct = () => {
    setUserDetails({});
    setShowAddUser(!ShowAddUser);
  };
  const columns = [
    { field: "_id", title: "ID", render: (item) => <div>{item._id}</div> },
    {
      field: "username",
      title: "User",
      width: 200,
      render: (item) => (
        <div className="userListUser">
          <img className="userListImg" src={item.userImage} alt="" />
          {item.username}
        </div>
      ),
    },
    { field: "email", title: "Email" },
    {
      field: "status",
      title: "Status",
      render: (item) => (
        <div className="productListItem">
          {item.status ? (
            <div>
              <CheckCircle style={{ color: "green" }} /> Online
            </div>
          ) : (
            <div>
              <RemoveCircle style={{ color: "red" }} /> Offline
            </div>
          )}
        </div>
      ),
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      title: "Action",
      render: (item) => (
        <>
          <button
            className="productListEdit"
            onClick={() => getUserDetails(item)}
          >
            Edit
          </button>

          <DeleteOutline
            className="productListDelete"
            onClick={() => handleDelete(item._id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="userList">
      <Button
        color="primary"
        variant="outlined"
        style={{ marginBottom: "10px" }}
        onClick={(event) => {
          toggleShowAddProduct();
        }}
      >
        {ShowAddUser ? "Back" : "Create"}
      </Button>
      {ShowAddUser ? (
        <AddUser userDetail={UserDetails} />
      ) : (
        <MaterialTable
          title="Users table "
          icons={tableIcons}
          data={Users}
          columns={columns}
          components={{
            Row: (props) => <MTableBodyRow id={props.data._id} {...props} />,
          }}
          localization={{
            toolbar: {
              searchPlaceholder: "Filter",
              searchTooltip: "filters the given text",
            },

            header: {
              actions: "Actions",
            },
          }}
          onChangeRowsPerPage={(data) => {}}
          options={{
            actionsColumnIndex: -1,
            selection: true,
            exportButton: true,
            showFirstLastPageButtons: true,
            pageSize: 5,
            padding: "dense",
            pageSizeOptions: [5, 20, 50],
          }}
          checkboxSelection
        />
      )}
    </div>
  );
}
