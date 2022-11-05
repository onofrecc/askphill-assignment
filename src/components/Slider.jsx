import React, {Component} from "react";
import "../styles/Slider.scss";
import SliderCard from "./SliderCard";
import {sliderData} from "../assets/data/SliderData";
import {sliderFunctionality} from './SliderFunctionality';

class Slider extends Component {
  renderSlider = () => {
    return sliderData.map((card, index) => <SliderCard title={card.title} imageName={card.imageName} key={index}/>)
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

sliderFunctionality();

export default Slider;
