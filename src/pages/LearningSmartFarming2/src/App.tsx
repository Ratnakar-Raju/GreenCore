import { useState } from 'react';
import { BookOpen, LineChart, Plane as Plant, Shield } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DiseaseAwareness from './components/DiseaseAwareness';
import CropPlanning from './components/CropPlanning';
import MarketInsights from './components/MarketInsights';
import PesticideGuide from './components/PesticideGuide';
import Navbar from './components/Navbar';
import UnderstandingPlantImmunity from './Articles/UnderstandingPlantImmunity';
import SeasonalDiseasePrevention from './Articles/SeasonalDiseasePrevention.tsx';
import NaturalDiseaseControl from './Articles/ControlMethods.tsx';

const DashboardTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'disease' | 'planning' | 'market' | 'pesticide'>('disease');

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <button
          onClick={() => setActiveTab('disease')}
          className={`p-4 rounded-lg flex items-center gap-3 transition-all ${
            activeTab === 'disease' ? 'bg-green-600 text-white shadow-lg' : 'bg-white hover:bg-green-50'
          }`}
        >
          <Shield className="w-5 h-5" />
          <span>Disease Awareness</span>
        </button>

        <button
          onClick={() => setActiveTab('planning')}
          className={`p-4 rounded-lg flex items-center gap-3 transition-all ${
            activeTab === 'planning' ? 'bg-green-600 text-white shadow-lg' : 'bg-white hover:bg-green-50'
          }`}
        >
          <Plant className="w-5 h-5" />
          <span>Crop Planning</span>
        </button>

        <button
          onClick={() => setActiveTab('market')}
          className={`p-4 rounded-lg flex items-center gap-3 transition-all ${
            activeTab === 'market' ? 'bg-green-600 text-white shadow-lg' : 'bg-white hover:bg-green-50'
          }`}
        >
          <LineChart className="w-5 h-5" />
          <span>Market Insights</span>
        </button>

        <button
          onClick={() => setActiveTab('pesticide')}
          className={`p-4 rounded-lg flex items-center gap-3 transition-all ${
            activeTab === 'pesticide' ? 'bg-green-600 text-white shadow-lg' : 'bg-white hover:bg-green-50'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Pesticide Guide</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {activeTab === 'disease' && <DiseaseAwareness />}
        {activeTab === 'planning' && <CropPlanning />}
        {activeTab === 'market' && <MarketInsights />}
        {activeTab === 'pesticide' && <PesticideGuide />}
      </div>

     
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<DashboardTabs />} />
          <Route path="/plant-immunity" element={<UnderstandingPlantImmunity />} />
          <Route path="/seasonal-diseases" element={<SeasonalDiseasePrevention/>} />
          <Route path="/control-methods" element={<NaturalDiseaseControl/>} />
           
        </Routes>
      </div>
    </Router>
  );
};

export default App;
