import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import PersonneCardPage from './pages/personneCard';
import CompanyCardPage from './pages/entrepriseCard';
import TestFetchPage from "./pages/TestFetchPage";
import Favorites from "./pages/vosFavoris";



import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/personneCard" element={<PersonneCardPage />} />
        <Route path="/companyCard/:id" element={<CompanyCardPage />} />
        <Route path="/test-fetch" element={<TestFetchPage />} />
        <Route path="/favorites" element={<Favorites />} />

      </Routes>
    </Router>
  );

}

export default App;