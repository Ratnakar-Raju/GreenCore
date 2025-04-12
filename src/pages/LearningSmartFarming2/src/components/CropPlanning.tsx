import React, { useState } from 'react';
import { Cloud, Droplets, Map } from 'lucide-react';

export default function CropPlanning() {
  const [soilType, setSoilType] = useState('');
  const [waterAvailability, setWaterAvailability] = useState('');
  
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Smart Crop Planning</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Map className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-medium">Soil Information</h3>
          </div>
          <select
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Soil Type</option>
            <option value="clay">Clay Soil</option>
            <option value="sandy">Sandy Soil</option>
            <option value="loamy">Loamy Soil</option>
            <option value="silt">Silty Soil</option>
          </select>
          <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
            Upload Soil Report
          </button>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-medium">Weather Conditions</h3>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold">24°C</p>
            <p className="text-gray-600">Partly Cloudy</p>
            <p className="mt-2 text-sm text-gray-500">Next 7 days forecast available</p>
          </div>
        </div>

        <div className="bg-cyan-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-6 h-6 text-cyan-600" />
            <h3 className="text-lg font-medium">Water Availability</h3>
          </div>
          <select
            value={waterAvailability}
            onChange={(e) => setWaterAvailability(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Water Source</option>
            <option value="irrigation">Irrigation System</option>
            <option value="rainfall">Rainfall Dependent</option>
            <option value="well">Well Water</option>
          </select>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-medium mb-4">Recommended Crops</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Wheat', 'Corn', 'Soybeans'].map((crop) => (
            <div key={crop} className="bg-white p-4 rounded-lg">
              <h4 className="font-medium">{crop}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Optimal planting conditions match your soil and climate.
              </p>
              <button className="mt-3 text-green-600 text-sm hover:text-green-700">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Planting Calendar</h3>
        <div className="grid grid-cols-4 gap-4">
          {['Jan', 'Feb', 'Mar', 'Apr'].map((month) => (
            <div key={month} className="bg-white p-4 rounded-lg text-center">
              <h4 className="font-medium">{month}</h4>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-green-600">Wheat</p>
                <p className="text-blue-600">Peas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}