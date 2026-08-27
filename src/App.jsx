import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import ResearchDevelopment from './pages/ResearchDevelopment';
import Quality from './pages/Quality';
import Infrastructure from './pages/Infrastructure';
import ContractManufacturing from './pages/ContractManufacturing';
import Packaging from './pages/Packaging';
import Partner from './pages/Partner';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A192F] antialiased selection:bg-[#0047FF] selection:text-white">
        
        {/* Floating Glassmorphic Top Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/contract-manufacturing" element={<ContractManufacturing />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Compliant Enterprise Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
