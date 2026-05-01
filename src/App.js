import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fitness from './pages/Fitness';
import Health from './pages/Health';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div id="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/health" element={<Health />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
