import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
