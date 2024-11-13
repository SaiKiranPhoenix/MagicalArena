// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerDetailsPage from './pages/PlayerDetailsPage';
import MatchPage from './pages/MatchPage';
import './styles/App.css';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/match">Start Match</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/player/:id" element={<PlayerDetailsPage />} />
      <Route path="/match" element={<MatchPage />} />
    </Routes>
  </Router>
);

export default App;
