import "./App.css";
import About from "./components/About";
import Awards from "./components/Awards";
import Partners from "./components/Partners";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import Workshop from "./components/workshop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Content">
        <Home />
        <About />
        {/* <Guidelines /> */}
        <Schedule />
        <Awards />
        <Workshop/>
        <Register/>
        <FAQ />
        <Partners />
      </div>
    </div>
  );
}

export default App;
