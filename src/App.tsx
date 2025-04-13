import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import DiseaseDetection from './pages/DiseaseDetection';
import { LearningSmartFarming2 } from './pages/LearningSmartFarming2';
import GreenGrocery from './pages/GreenGrocery';
import Chatbot from './pages/LearningSmartFarming2/src/Chatbot';
import { MessageCircle } from 'lucide-react';
import { ProjectReview } from './pages/ProjectReview';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/learning-smart-farming2" element={<LearningSmartFarming2 />} />
            <Route path="/green-grocery" element={<GreenGrocery />} />
            <Route path="/project-review" element={<ProjectReview />} />
          </Routes>
        </Layout>
        {/* Global Chatbot */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative group">
            <div 
              onClick={toggleChatbot}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
          </div>
          {showChatbot && (
            <div className="fixed bottom-24 right-6 z-50">
              <Chatbot isVisible={true} />
            </div>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;