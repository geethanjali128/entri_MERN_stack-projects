
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

import Projects from './components/Projects';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
          
           <Route path='#about' exact  element={<About/>}/>
           <Route path='#projects'   exact   element={<Projects/>}/>
          
            <Route path='#contact'  exact  element={<Contact/>}/>
            <Route path='#header'  exact element={<Home/>}/>
        </Routes>
      </Router>
    <Home/>
    <About/>
    <Projects/>
   
    <Contact/>

    </div>
  );
}

export default App;
