import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Pricing from './Pricing';
import FormPage from './FormPage';

function App1() {
  return (
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
  
  );
}

export default App1;
