import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BlogIndex from './pages/blog/BlogIndex';
import ProjectPosts from './pages/blog/ProjectPosts';
import PostPage from './pages/blog/PostPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '80px 2rem' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='blog' element={<BlogIndex />} />
          <Route path='blog/:project' element={<ProjectPosts />} />
          <Route path='blog/:project/:post' element={<PostPage />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

