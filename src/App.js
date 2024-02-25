import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Works from "./Components/Works/works";
import Language from "./Components/Language/language";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Language/>
     <Contact/>
     <Footer/>
    </div>
  );
}


export default App;
