import React, { useState } from 'react';
import { Sprout } from 'lucide-react';
import Chatbot from '../Chatbot';

export default function Navbar() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sprout className="w-8 h-8 text-green-600" />
              <span className="text-xl font-semibold text-gray-800">FarmAdvisor</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800">About</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Contact Expert
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setShowChatbot((prev) => !prev)}
              >
                {showChatbot ? "Close Chat" : "Chat with Us"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Chatbot isVisible={showChatbot} />
    </>
  );
}
