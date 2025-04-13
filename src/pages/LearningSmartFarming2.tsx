import React, { useState } from 'react';
import { BookOpen, LineChart, Leaf, Shield } from 'lucide-react';

// Import components from the original LearningSmartFarming2
import DiseaseAwareness from './LearningSmartFarming2/src/components/DiseaseAwareness';
import CropPlanning from './LearningSmartFarming2/src/components/CropPlanning';
import MarketInsights from './LearningSmartFarming2/src/components/MarketInsights';
import PesticideGuide from './LearningSmartFarming2/src/components/PesticideGuide';

export function LearningSmartFarming2() {
  const [activeTab, setActiveTab] = useState<'disease' | 'planning' | 'market' | 'pesticide'>('disease');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
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
            <Leaf className="w-5 h-5" />
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

        {/* Content Area */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {activeTab === 'disease' && <DiseaseAwareness />}
          {activeTab === 'planning' && <CropPlanning />}
          {activeTab === 'market' && <MarketInsights />}
          {activeTab === 'pesticide' && <PesticideGuide />}
        </div>
      </div>
    </div>
  );
} 