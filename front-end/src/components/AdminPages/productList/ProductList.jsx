import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import StarRate  from "@material-ui/icons/StarRate";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../../../Redux/actions/productActions/product"
import { Button } from "@material-ui/core";


export default function ProductList() {
  const [data, setData] = useState(productRows);
const products =useSelector(state=>state.products)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  
  },[])

 
  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 250, renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row._id}
          </div>
        );
      }, },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.prodcutImage} alt="" />
            {params.row.productTitle}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 ,  renderCell: (params) => {
        
        return (
          <div className="productListItem">
            {params.row.productStock}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        
        return (
          <div className="productListItem">
           {params.row.productStatus?<div>Active</div>:<div>Desactive</div>}
          </div>
        );
      },
     
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
       renderCell: (params) => {
        
        return (
          <div className="productListItem">
            {params.row.productPrice } TND
          </div>
        );
      },
    },
    {
      field: "Rating",
      headerName: "Rating",
      width: 160,
       renderCell: (params) => {
        
        return (
          <div className="productListItem">
            {params.row.productRating } <StarRate style={{color:"#FFA500"}}/>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={ ""+params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <Button
      color="primary"
        variant="outlined"
        style={{marginBottom:"10px"}}
        onClick={(event) => {
        console.log("test");
        }}
        >Create</Button>
      <DataGrid
        getRowId={(row) => row._id}
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
