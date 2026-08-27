import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarV2 from './components/NavbarV2';
import FooterV2 from './components/FooterV2';
import HomeV2 from './pages/HomeV2';
import CapabilitiesV2 from './pages/CapabilitiesV2';
import InfrastructureV2 from './pages/InfrastructureV2';
import ContactV2 from './pages/ContactV2';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030914] text-white">
      <NavbarV2 />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/capabilities" element={<CapabilitiesV2 />} />
          <Route path="/infrastructure" element={<InfrastructureV2 />} />
          <Route path="/contact" element={<ContactV2 />} />
          {/* Fallback */}
          <Route path="*" element={<HomeV2 />} />
        </Routes>
      </main>
      <FooterV2 />
    </div>
  );
}
