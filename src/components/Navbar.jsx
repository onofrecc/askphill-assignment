import React, {Component} from "react";
import "../styles/Navbar.scss";
import IconMenu from "../assets/icons/IconMenu";
import IconStox from "../assets/icons/IconStox";
import IconShoppingBag from "../assets/icons/IconShoppingBag";

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="navigation">
          <div className="left-navigation">
            <IconMenu className="icon-menu" onClick={this.props.hideShow}/>
            <IconStox />
          </div>
          <div className="right-navigation">
            <IconShoppingBag className="icon-shopping-bag" />
            <p className="icon-text">0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
