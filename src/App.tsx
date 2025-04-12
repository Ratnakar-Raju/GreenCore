import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import DiseaseDetection from './pages/DiseaseDetection';
import { LearningSmartFarming } from './pages/LearningSmartFarming';
import { LearningSmartFarming2 } from './pages/LearningSmartFarming2';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/learning-smart-farming" element={<LearningSmartFarming />} />
            <Route path="/learning-smart-farming2" element={<LearningSmartFarming2 />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;