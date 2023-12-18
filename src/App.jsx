import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {

  return (
    <>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
