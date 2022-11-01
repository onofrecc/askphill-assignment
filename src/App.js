import "./App.css";
import Accordion from "./components/Accordion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
