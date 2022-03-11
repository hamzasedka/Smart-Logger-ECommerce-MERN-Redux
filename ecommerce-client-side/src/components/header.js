import React, { useState } from "react";
import styled from "styled-components";

const COLORS = {
  primaryDark: "black",
  primaryLight: "transparent",
};

const MenuLabel = styled.label`
  position: fixed;
  padding-top: 10px;
  border-radius: 10px;
  top: 1rem;
  left: 1rem;
  height: 60px;
  width: 70px;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-image: radial-gradient(white, black);
  height: 70px;
  width: 70px;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#6c757d")};
  width: 35px;
  height: 2px;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #6c757d;
    width: 35px;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled.a`
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: #6c757d;
  cursor: pointer;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #6c757d 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 15%;
    color: white;
    background-color: transparent;
  }
`;
export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink
              style={{ textDecoration: "none" }}
              onClick={handleClick}
              to="/"
            >
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink
              style={{ textDecoration: "none" }}
              onClick={handleClick}
              to="/about"
            >
              About
            </ItemLink>
          </li>
          <li>
            <ItemLink
              style={{ textDecoration: "none" }}
              onClick={handleClick}
              to="/portfolio"
            >
              Portfolio
            </ItemLink>
          </li>
          <li>
            <ItemLink
              style={{ textDecoration: "none" }}
              onClick={handleClick}
              to="/blog"
            >
              Blog
            </ItemLink>
          </li>
          <li>
            <ItemLink
              style={{ textDecoration: "none" }}
              onClick={handleClick}
              to="/contact"
            >
              Contact Us
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}
