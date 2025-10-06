
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Showreel from './pages/Showreel';
import About from './pages/About';
import Contact from './pages/Contact';


export default function AppRoutes({ animate, setAnimate }) {
    

  return (
    <Routes>
      <Route path="/" element={<Home animate={animate} setAnimate={setAnimate}/>} />
      <Route path="/showreel" element={<Showreel />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}