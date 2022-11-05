import React, {Component} from "react";
import "../styles/AccordionSubmenu.scss";

class AccordionSubmenu extends Component {
  render() {
    const title = this.props.title;
    const quantity = this.props.quantity;
    return (
      <div className="accordion-submenu-item">
        <h4>{title.toUpperCase()}</h4>
        <h5>{quantity} product{quantity === 1 ? "" : "s"}</h5>
      </div>
    );
  }
}

export default AccordionSubmenu;
