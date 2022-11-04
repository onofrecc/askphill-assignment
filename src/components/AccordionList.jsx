import React, {Component} from "react";
import "../styles/AccordionList.scss";
import Accordion from "./Accordion";
import {accordionData} from "../assets/data/AccordionData";

class AccordionList extends Component {
  renderList = () => {
    return accordionData.map(accordion => <Accordion title={accordion.title} submenu={accordion.submenu} />);
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
