import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
