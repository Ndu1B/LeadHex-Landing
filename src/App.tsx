import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/terms" element={<div>Terms Page</div>} />
        <Route path="/privacy" element={<div>Privacy Page</div>} />
      </Routes>
    </Router>
  );
}

export default App; 