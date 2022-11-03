import React, { Component } from "react";
import "../styles/Slider.scss";
import SliderCard from "./SliderCard";
import { SliderData } from "../assets/data/SliderData";

class Slider extends Component {
  renderSlider = () => {
    return SliderData.map(card => <SliderCard title={card.title} imageName={card.imageName} />)
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-inner">
          {this.renderSlider()}
        </div>
      </div>
    );
  }
}

export default Slider;
