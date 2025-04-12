
import {  BookOpen, MessageSquare } from 'lucide-react';
 //import { useNavigate } from 'react-router-dom';
//import {UnderstandingPlantImmunity} from '../Articles/UnderstandingPlantImmunity';
import { Link } from 'react-router-dom';

export default function DiseaseAwareness() {
   //const navigate = useNavigate();

  //  const handleReadMore = () => {
  //    navigate('../Articles/UnderstandingPlantImmunity');
  //   }; 

  const videos = [
    {
      title: 'Identifying Common Wheat Diseases',
      embedUrl: 'https://youtube.com/embed/gnlzMIrjsrQ',
      duration: '80.00'
    },
    {
      title: 'Preventing Fungal Infections in Tomatoes',
      embedUrl:'https://youtube.com/embed/SCHAFXvaZZ8' ,
      duration: '9.37'
    },
    {
      title: 'Understanding Bacterial Wilt in Cucumbers',
      embedUrl: 'https://youtube.com/embed/dX5jj-TElDY?si=XabrOkJfq6EAc_hJ',
      duration: '7.31'
    },
    {
      title: 'Managing Powdery Mildew in Roses',
      embedUrl: 'https://youtube.com/embed/DcYanYbh4v0?si=ySdmXEe9qs3ehXpQ',
      duration: '10.37'
    },
    {
      title: 'Controlling Aphids in Greenhouses',
      embedUrl: 'https://youtube.com/embed/Wn8ZA4zUD8c?si=NZrF9jvnKXBLaYqp',
      duration: '10.24'
    },
    {
      title: 'Understanding Downy Mildew in Grapes',
      embedUrl: 'https://youtube.com/embed/nb4fN32B_rQ?si=kFMJo2ac8HcTr-3l',
      duration: '33.33'
    }
  ];
 
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Disease Awareness & Prevention</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative">

            <iframe
                className="w-full h-48"
                src={video.embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

             
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-medium">Expert Articles</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Understanding Plant Immunity</span>
              <Link
                to="/plant-immunity"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                Read →
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <span>Seasonal Diseases Prevention</span>
              <Link
                to="/seasonal-diseases"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                Read →
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <span>Natural Diseases control methods</span>
              <Link
                to="/control-methods"
                className="text-green-600 hover:text-green-700 font-medium hover:underline"
              >
                Read →
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-medium">Community Discussion</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <p className="text-sm text-gray-600">Latest Discussion</p>
              <p className="mt-1">Effective measures against tomato blight in humid conditions?</p>
              <div className="mt-2 flex items-center gap-2">
                <button className="text-sm text-blue-600">12 replies</button>
                <span className="text-gray-300">•</span>
                <button className="text-sm text-blue-600">Join discussion</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}