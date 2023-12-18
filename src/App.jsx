import Navbar from "./layouts/Navbar";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <main >
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
