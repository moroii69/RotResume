import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { ResumeBuilder } from './pages/ResumeBuilder';
import { ResumePreview } from './pages/ResumePreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<ResumeBuilder />} />
        <Route path="/preview" element={<ResumePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;