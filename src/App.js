import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EmailProcessing from './pages/EmailProcessing';
import LLMUsage from './pages/LLMUsage';
import ProcessingQueue from './pages/ProcessingQueue';
import Chatbox from './pages/Chatbox';
import Support from './pages/Support';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email-processing" element={<EmailProcessing />} />
          <Route path="/llm-usage" element={<LLMUsage />} />
          <Route path="/processing-queue" element={<ProcessingQueue />} />
          <Route path="/chatbox" element={<Chatbox />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
