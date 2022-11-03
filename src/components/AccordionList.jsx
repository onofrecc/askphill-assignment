import React, { Component } from "react";
import "../styles/AccordionList.scss";
import Accordion from "./Accordion";
import { AccordionData } from "../assets/data/AccordionData";

class AccordionList extends Component {
  renderList = () => {
    return AccordionData.map(accordion => <Accordion title={accordion.title} submenu={accordion.submenu} />);
  }

  render() {
    return (
      <div className="accordion-list">
        {this.renderList()}
      </div>
    );
  }
}

export default AccordionList;
