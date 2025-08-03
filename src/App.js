import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
      </header>
    </div>
  );
}

export default App;
