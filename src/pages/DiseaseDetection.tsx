import { useState } from 'react';
import axios from 'axios';

interface DiseaseResult {
  disease_name: string;
  confidence: number;
  pesticides: string[];
  video_url?: string;
  description: string;
}

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'rdO5ZjKJmCAaFyebxcjvatsPJ01cFral3rTU5J1KAlnhYCzKo5';
  const API_URL = 'https://crop.kindwise.com/api/v1';

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setResult(null); // Clear previous results
      setError(null); // Clear previous errors
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('images', selectedImage);
    formData.append('api_key', API_KEY);

    try {
      const response = await axios.post(`${API_URL}/identify`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.suggestions && response.data.suggestions.length > 0) {
        const suggestion = response.data.suggestions[0];
        setResult({
          disease_name: suggestion.name,
          confidence: suggestion.probability,
          pesticides: suggestion.pesticides || [],
          video_url: suggestion.video_url,
          description: suggestion.description || 'No description available'
        });
      } else {
        setError('No disease detected in the image. Please try with a different image.');
      }
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to analyze the image. Please try again with a clear image of the affected crop.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Crop Disease Detection</h1>
        
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer block"
            >
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="max-h-64 mx-auto"
                />
              ) : (
                <div className="text-gray-500">
                  <p>Click to upload an image of your crop</p>
                  <p className="text-sm">Supported formats: JPG, PNG</p>
                </div>
              )}
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !selectedImage}
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
              loading || !selectedImage
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Analyzing...' : 'Detect Disease'}
          </button>

          {error && (
            <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">{error}</div>
          )}

          {result && (
            <div className="mt-6 space-y-4">
              <h2 className="text-2xl font-semibold">Analysis Results</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">Disease Identified:</h3>
                <p className="text-lg">{result.disease_name}</p>
                <p className="text-sm text-gray-600">Confidence: {(result.confidence * 100).toFixed(2)}%</p>
                
                <h3 className="font-semibold mt-4">Description:</h3>
                <p className="text-gray-700">{result.description}</p>
                
                <h3 className="font-semibold mt-4">Recommended Pesticides:</h3>
                <ul className="list-disc pl-5">
                  {result.pesticides.length > 0 ? (
                    result.pesticides.map((pesticide, index) => (
                      <li key={index} className="text-gray-700">{pesticide}</li>
                    ))
                  ) : (
                    <li className="text-gray-700">No specific pesticides recommended</li>
                  )}
                </ul>

                {result.video_url && (
                  <div className="mt-4">
                    <h3 className="font-semibold">How to Apply:</h3>
                    <div className="mt-2">
                      <video
                        src={result.video_url}
                        controls
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection; 