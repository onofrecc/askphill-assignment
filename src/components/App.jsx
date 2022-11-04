import React, { Component } from "react";
import "../styles/App.scss";
import AccordionList from "./AccordionList"
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";

class App extends Component {
  render () {
    return (
      <div className="app">
        <Navbar />
        <div className="app-body">
          <Slider />
          <AccordionList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
