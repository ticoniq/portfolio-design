import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<p>Project</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
