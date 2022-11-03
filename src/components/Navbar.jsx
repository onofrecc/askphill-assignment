import React from "react";
import "../styles/Navbar.scss";
import IconMenu from "../assets/icons/IconMenu";
import IconStox from "../assets/icons/IconStox";
import IconShoppingBag from "../assets/icons/IconShoppingBag";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navigation">
        <div className="left-navigation">
          <IconMenu />
          <IconStox />
        </div>
        <div className="right-navigation">
          <IconShoppingBag />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
