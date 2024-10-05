import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Headphones, FileText, FileAudio, FileVideo, Check } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* ... (previous sections remain unchanged) ... */}

      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Flexible Pricing Plans</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
            <p className="text-3xl font-bold mb-2">$3.99<span className="text-base font-normal">/week</span></p>
            <p className="text-gray-600 mb-4">4 hours of transcription time</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                3-day free trial
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                High accuracy
              </li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
            <p className="text-3xl font-bold mb-2">$9.99<span className="text-base font-normal">/month</span></p>
            <p className="text-gray-600 mb-4">24 hours of transcription time</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                3-day free trial
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                High accuracy
              </li>
            </ul>
          </div>
          <div className="border-2 border-blue-500 p-4 rounded-lg relative">
            <div className="bg-blue-500 text-white py-1 px-2 rounded-full text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">Best Value</div>
            <h3 className="text-xl font-semibold mb-2">Annual Plan</h3>
            <p className="text-3xl font-bold mb-2">$59.99<span className="text-base font-normal">/year</span></p>
            <p className="text-gray-600 mb-4">300 hours of transcription time</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                3-day free trial
              </li>
              <li className="flex items-center">
                <Check size={20} className="text-green-500 mr-2" />
                High accuracy
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link to="/pricing" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            View Full Pricing Details
          </Link>
        </div>
      </section>

      {/* ... (remaining sections unchanged) ... */}
    </div>
  )
}

export default Home