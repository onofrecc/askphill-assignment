import React, {Component} from "react";
import "../styles/App.scss";
import AccordionList from "./AccordionList"
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  hideShow = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render () {
    const {show} = this.state
    return (
      <div className="app">
        <Navbar hideShow={this.hideShow} />
          <div className={`app-body ${!show ? "undisplayed" : ""}`}>
            <Slider />
            <AccordionList />
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
