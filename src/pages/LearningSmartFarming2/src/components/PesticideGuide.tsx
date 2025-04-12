import React, { useState } from 'react';
import { Leaf, AlertTriangle, Video, FileText, Play } from 'lucide-react';

export default function PesticideGuide() {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Pesticide Guidance</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Crop</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Choose a crop</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Disease</label>
          <select
            value={selectedDisease}
            onChange={(e) => setSelectedDisease(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Choose a disease</option>
            <option value="rust">Rust</option>
            <option value="blight">Blight</option>
            <option value="mildew">Powdery Mildew</option>
          </select>
        </div>
      </div>

      {selectedCrop && selectedDisease && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-medium">Recommended Treatments</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium">Organic Solution</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Neem oil spray - Natural fungicide and insecticide
                </p>
                <button className="mt-2 text-green-600 text-sm">View Application Guide →</button>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium">Chemical Treatment</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Approved fungicide for {selectedDisease}
                </p>
                <button className="mt-2 text-green-600 text-sm">View Application Guide →</button>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h3 className="text-lg font-medium">Safety Precautions</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                Wear protective clothing and masks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                Apply during calm weather conditions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                Keep children and pets away from treated areas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                Follow recommended dosage strictly
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-medium">Tutorial Videos</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded flex items-center gap-3">
              <div className="w-20 h-12 bg-gray-100 rounded flex items-center justify-center">
                <Play className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Safe Pesticide Application</h4>
                <p className="text-xs text-gray-500">Duration: 5:30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-purple-600" />
            <h3 className="text-lg font-medium">Additional Resources</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <button className="text-purple-600 hover:text-purple-700">
                Download Safety Guidelines PDF
              </button>
            </li>
            <li>
              <button className="text-purple-600 hover:text-purple-700">
                View Treatment Calendar
              </button>
            </li>
            <li>
              <button className="text-purple-600 hover:text-purple-700">
                Emergency Contact Information
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}