import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </Router>
  );

}

export default App;