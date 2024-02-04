import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import { Stack } from '@mui/material';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <BrowserRouter>{" "}
    <Stack>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </Stack>
    
    {" "}
    </BrowserRouter>
      
    </div>
  );
}

export default App;
