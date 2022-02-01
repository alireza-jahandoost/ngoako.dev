import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <hr className="horizontal-line" />
      <Projects />
      <hr className="horizontal-line" />
      <About />
      <hr className="horizontal-line" />
      <Contact />
    </div>
  );
}

export default App;
