import React from 'react';
import { TrendingUp, DollarSign, BarChart } from 'lucide-react';

export default function MarketInsights() {
  const marketData = [
    { crop: 'Wheat', price: '280.50', change: '+2.3%' },
    { crop: 'Corn', price: '175.25', change: '-0.8%' },
    { crop: 'Soybeans', price: '425.75', change: '+1.5%' },
    { crop: 'Rice', price: '320.00', change: '+0.5%' }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Market Price Insights</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Crop</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Current Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">24h Change</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {marketData.map((item) => (
              <tr key={item.crop} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{item.crop}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {item.price}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {item.change}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-700">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h3 className="text-lg font-medium">Price Trends</h3>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-indigo-200 rounded">
            <p className="text-gray-500">Price trend chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-pink-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-pink-600" />
            <h3 className="text-lg font-medium">Profitability Analysis</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Wheat</span>
                <span className="text-green-600">High Profit Potential</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Corn</span>
                <span className="text-yellow-600">Medium Profit Potential</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}