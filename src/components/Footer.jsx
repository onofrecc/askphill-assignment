import React, {Component} from "react";
import "../styles/Footer.scss";
import IconAccordion from "../assets/icons/IconAccordion";

class Footer extends Component {
  render () {
    return (
      <div className="footer">
          <div className="footer-navbar">
            <h3>REVIEW</h3>
            <h3>CONTACT</h3>
            <h3>ACCOUNT</h3>
          </div>
          <div className="language">
            <h3><span className="bold">LANGUAGE:</span> EN €</h3>
            <IconAccordion />
          </div>
          <div className="call">
            <h3><span className="bold">Call</span> 020-2050738</h3>
            <h3>Mon - Thu, 9:00 - 19:00</h3>
            <h3>Fri, 9:00 - 18:00</h3>
          </div>
          <div className="mail">
            <h3><span className="bold">mail</span> onshallo@aceandtate.nl</h3>
          </div>
          <div className="whatsapp">
            <h3><span className="bold">whatsapp</span> +31 6 33236677</h3>
          </div>
      </div>
    );
  }
}

export default Footer;
