import React, { useState } from "react";
import AddShoppingCartOutlined from "@material-ui/icons/AddShoppingCartOutlined";
import Search from "@material-ui/icons/Search";
import "./styles/header.css";
import SearchBar from "./searchBar";
export default function Header() {
  return (
    <>
      <input id="nav-toggle" type="checkbox" />
      <nav>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line" />
          <div id="middelLine" className="line" />
          <div className="line" />
        </label>
      </nav>
    </>
  );
}
