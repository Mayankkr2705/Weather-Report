import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { WiDaySunny } from 'react-icons/wi';
import { TbWind } from 'react-icons/tb';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Info Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">🌍 TRIVERA</h2>
          <p className="text-sm">
            Real-time reports on environmental conditions:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition" 
              onClick={() => navigate('/')}
            >
              <WiDaySunny size={20} /> Weather Updates (temp, forecast)
            </li>
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition" 
              onClick={() => navigate('/air-report')}
            >
              <TbWind size={16} /> Air Quality (AQI, PM2.5, CO₂)
            </li>
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition" 
              onClick={() => navigate('/water-quality')}
            >
              <MdOutlineWaterDrop size={16} /> Water Quality (pH, turbidity)
            </li>
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition" 
              onClick={() => navigate('/traffic')}
            >
              <FaCarSide size={16} /> Traffic Reports (congestion, incidents)
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">📞 Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> support@trivera.app</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91-9310900626</li>
            <li className="flex items-center gap-2"><Globe size={16} /> https://trivera.netlify.app</li>
          </ul>
        </div>

        {/* Legal / Credits */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ℹ️ More Info</h3>
          <p className="text-sm mb-2">🔁 Updated every 15 minutes</p>
          <p className="text-sm mb-2">🔒 Data encrypted end-to-end</p>
          <p className="text-xs text-gray-400 mt-4">
            © 2025 TRIVERA Technologies. All rights reserved.  
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Disclaimer: Data for informational purposes only. Refer to local authorities for emergencies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
