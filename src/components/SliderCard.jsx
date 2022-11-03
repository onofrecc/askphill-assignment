import React, { Component } from "react";
import "../styles/SliderCard.scss";

class SliderCard extends Component {
  render() {
    const title = this.props.title;
    const path = require(`../assets/images/${this.props.imageName}.png`);

    return (
      <div className="slider-card">
        <img src={path} alt="the best run" />
        <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
      </div>
    )
  }
}

export default SliderCard;
