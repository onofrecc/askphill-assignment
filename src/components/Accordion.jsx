import React, { Component } from "react";
import "../styles/Accordion.scss";
import AccordionSubmenu from "./AccordionSubmenu";
import IconAccordion from "../assets/icons/IconAccordion";

class Accordion extends Component {
  renderSubmenu = () => {
    const submenu = this.props.submenu;
    return submenu && submenu.map(menu => < AccordionSubmenu title={menu.title} quantity={menu.quantity} />);
  }

  render () {
    const title = this.props.title;
    return (
      <div className="accordion">
        <div className="accordion-main">
          <h2>{title.toUpperCase()}</h2>
          <IconAccordion />
        </div>
        <div className="accordion-submenu">
          {this.renderSubmenu()}
        </div>
      </div>
    );
  }
}

export default Accordion;
