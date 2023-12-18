import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Hero from './components/Hero';

function App() {

  return (
    <>
      <Navbar />
      <main >
        <Hero />
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/project" element={<p>Project</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
