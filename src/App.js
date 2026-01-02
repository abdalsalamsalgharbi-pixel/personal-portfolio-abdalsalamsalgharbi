import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './assets/styles/fonts.css';
import './App.css';
import './assets/styles/variables.css';
import CustomCursor from './components/CustomCursor';
import FloatingNav from './components/Layout/FloatingNav';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';

const Content = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Header />
        <FloatingNav />
        <main>
          <Content />
        </main>
      </div>
    </Router>
  );
}

export default App;
