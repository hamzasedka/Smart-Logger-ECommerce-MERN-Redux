import React, { useState } from "react";
import { Route } from "react-router-dom";
import Product from "../components/AdminPages/product/Product";
import ProductList from "../components/AdminPages/productList/ProductList";
import User from "../components/AdminPages/user/User";
import UserList from "../components/AdminPages/userList/UserList";
import BoardAdmin from "../components/BoardAdmin";
import { Routes } from "react-router-dom";
import Topbar from "../components/AdminComponents/topbar/Topbar";
import Sidebar from "../components/AdminComponents/sidebar/Sidebar";
import AddProduct from "../components/AdminPages/addProduct/AddProduct";
import { motion, AnimatePresence } from "framer-motion";
import { duration } from "@material-ui/core";
function AdminRoutes() {
  const [showSideBar, setshowSideBar] = useState(true);
  return (
    <>
      <Topbar setShowSideBar={setshowSideBar} showSideBare={showSideBar} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {showSideBar ? (
          <AnimatePresence>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -500 }}
              exit={{ x: -500 }}
              transition={{
                type: "tween",
                duration: 0.1,
              }}
            >
              <Sidebar />
            </motion.div>
          </AnimatePresence>
        ) : (
          <></>
        )}
        <Routes>
          <Route path="/admin" element={<BoardAdmin />} />
          <Route exact path="/admin/products" element={<ProductList />} />
          <Route exact path="admin/users" element={<UserList />} />
          <Route exact path="admin/updateUser/:user" element={<User />} />
          <Route
            exact
            path="admin/updateProduct/:product"
            element={<Product />}
          />
          <Route exact path="admin/addProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default AdminRoutes;
