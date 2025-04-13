import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock results for different crop diseases
    const mockResults = [
      {
        disease_name: "Tomato Blight",
        confidence: 0.95,
        pesticides: ["Copper-based fungicide", "Chlorothalonil", "Mancozeb"],
        video_url: "https://www.youtube.com/embed/example1",
        description: "Tomato blight is a fungal disease that causes dark spots on leaves and stems, leading to plant death. It thrives in wet conditions and can spread rapidly."
      },
      {
        disease_name: "Rice Blast",
        confidence: 0.92,
        pesticides: ["Tricyclazole", "Carbendazim", "Isoprothiolane"],
        video_url: "https://www.youtube.com/embed/example2",
        description: "Rice blast is a fungal disease that causes lesions on leaves, stems, and panicles. It can cause significant yield loss if not controlled."
      },
      {
        disease_name: "Wheat Rust",
        confidence: 0.88,
        pesticides: ["Propiconazole", "Tebuconazole", "Triadimefon"],
        video_url: "https://www.youtube.com/embed/example3",
        description: "Wheat rust appears as orange or brown pustules on leaves and stems. It can reduce yield by up to 50% if not treated early."
      },
      {
        disease_name: "Healthy Plant",
        confidence: 0.98,
        pesticides: [],
        description: "The plant appears to be healthy with no signs of disease. Continue with regular monitoring and good agricultural practices."
      }
    ];

    // Randomly select a mock result
    const randomIndex = Math.floor(Math.random() * mockResults.length);
    setResult(mockResults[randomIndex]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Crop Disease Detection</h1>
          
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
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
                  <div className="space-y-4">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      className="max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600">Click to change image</p>
                  </div>
                ) : (
                  <div className="text-gray-500 space-y-2">
                    <p className="text-lg">Click to upload an image of your crop</p>
                    <p className="text-sm">Supported formats: JPG, PNG</p>
                  </div>
                )}
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !selectedImage}
              className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors ${
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
                <h2 className="text-2xl font-semibold text-gray-800">Analysis Results</h2>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700">Disease Identified:</h3>
                    <p className="text-lg text-gray-800">{result.disease_name}</p>
                    <p className="text-sm text-gray-600">Confidence: {(result.confidence * 100).toFixed(2)}%</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-700">Description:</h3>
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-700">Recommended Pesticides:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {result.pesticides.length > 0 ? (
                        result.pesticides.map((pesticide, index) => (
                          <li key={index} className="text-gray-700">
                            <Link 
                              to="/green-grocery" 
                              className="text-green-600 hover:text-green-700 hover:underline flex items-center gap-2"
                            >
                              {pesticide}
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-700">No specific pesticides recommended</li>
                      )}
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">
                      Click on any pesticide to purchase from our Green Grocery store
                    </p>
                  </div>

                  {result.video_url && (
                    <div>
                      <h3 className="font-semibold text-gray-700">How to Apply:</h3>
                      <div className="mt-2">
                        <Link 
                          to="/learning-smart-farming2" 
                          className="block relative group cursor-pointer"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                              <div className="bg-white bg-opacity-90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                            <img
                              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
                              alt="Learn More"
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                          <p className="mt-2 text-center text-green-600 group-hover:text-green-700 transition-colors">
                            Click to learn more about disease management
                          </p>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection; 