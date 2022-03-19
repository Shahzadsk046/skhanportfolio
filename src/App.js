import "./App.css";
import About from "./Components/BodyComponents/About";
import Contact from "./Components/BodyComponents/Contact";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Headers/Header";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
