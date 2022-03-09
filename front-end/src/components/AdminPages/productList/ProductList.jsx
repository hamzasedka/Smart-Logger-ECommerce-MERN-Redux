import "./productList.css";
import { DeleteOutline } from "@material-ui/icons";
import StarRate from "@material-ui/icons/StarRate";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  getOneProduct,
  getProducts,
} from "../../../Redux/actions/productActions/product";
import AddProduct from "../addProduct/AddProduct";
import { Button } from "@material-ui/core";
import MaterialTable, { MTableBodyRow } from "@material-table/core";
import tableIcons from "../../../helpers/MaterialTableIcons";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const [productDetail, setProductDetail] = useState({});

  const [isDeleted, setIsDeleted] = useState(false);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [isDeleted]);

  const toggleShowAddProduct = () => {
    setProductDetail({});
    setShowAddProduct(!showAddProduct);
  };
  const handleDelete = (id) => {
    let confirmAction = window.confirm("Are you sure to execute this action?");
    if (confirmAction) {
      dispatch(DeleteProduct(id));
      setIsDeleted(!isDeleted);
    }
  };
  const getProductDetails = (item) => {
    setProductDetail(item);
    setShowAddProduct(!showAddProduct);
  };
  const columns = [
    { field: "_id", title: "ID", render: (item) => <div>{item._id}</div> },
    {
      field: "productTitle",
      title: "Title",
      render: (item) => (
        <div>
          {item.productTitle}{" "}
          <img src={item.prodcutImage} alt="" height="30" width="30" />{" "}
        </div>
      ),
    },
    { field: "productStock", title: "Stock" },
    {
      field: "productStatus",
      title: "Status",
      render: (item) => <div>{item.productStatus ? "Active" : "Inactive"}</div>,
    },
    {
      field: "productPrice",
      title: "Price",
      render: (item) => <div>{item.productPrice} TND</div>,
    },
    {
      field: "productRating",
      title: "Rating",
      render: (item) => (
        <div className="productListItem">
          {item.productRating} <StarRate style={{ color: "#FFA500" }} />
        </div>
      ),
    },
    {
      title: "Action",
      render: (item) => (
        <>
          <button
            className="productListEdit"
            onClick={() => getProductDetails(item)}
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
    <div className="productList">
      <Button
        color="primary"
        variant="outlined"
        style={{ marginBottom: "10px" }}
        onClick={(event) => {
          toggleShowAddProduct();
        }}
      >
        {showAddProduct ? "Back" : "Create"}
      </Button>
      {showAddProduct ? (
        <AddProduct productDetail={productDetail} />
      ) : (
        <MaterialTable
          title="Product table "
          icons={tableIcons}
          data={products}
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
