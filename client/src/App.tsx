import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '80px 2rem' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

