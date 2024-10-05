import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const PricingTier: React.FC<{ name: string; price: string; period: string; transcriptionTime: string; features: string[]; highlight?: boolean }> = ({ name, price, period, transcriptionTime, features, highlight }) => (
  <div className={`bg-white p-6 sm:p-8 rounded-lg shadow-md ${highlight ? 'border-2 border-blue-500' : ''}`}>
    {highlight && <div className="bg-blue-500 text-white py-1 px-4 rounded-t-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Best Value</div>}
    <h3 className="text-xl sm:text-2xl font-bold mb-4">{name}</h3>
    <p className="text-3xl sm:text-4xl font-bold mb-2">{price}<span className="text-base sm:text-lg font-normal">/{period}</span></p>
    <p className="text-gray-600 mb-6">{transcriptionTime}</p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2 text-sm sm:text-base">
          <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/signup" className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
      Start Free Trial
    </Link>
  </div>
)

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Weekly Plan"
          price="$3.99"
          period="week"
          transcriptionTime="4 hours of transcription time"
          features={[
            "3-day free trial",
            "4 hours of transcription per week",
            "High accuracy",
            "Email support",
            "Cancel anytime"
          ]}
        />
        <PricingTier
          name="Monthly Plan"
          price="$9.99"
          period="month"
          transcriptionTime="24 hours of transcription time"
          features={[
            "3-day free trial",
            "24 hours of transcription per month",
            "High accuracy",
            "Email support",
            "Cancel anytime"
          ]}
        />
        <PricingTier
          name="Annual Plan"
          price="$59.99"
          period="year"
          transcriptionTime="300 hours of transcription time"
          features={[
            "3-day free trial",
            "300 hours of transcription per year",
            "High accuracy",
            "Email support",
            "Cancel anytime",
            "Best value for heavy users"
          ]}
          highlight={true}
        />
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">All Plans Include:</h2>
        <ul className="inline-block text-left">
          <li className="flex items-center mb-2">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>3-day free trial</span>
          </li>
          <li className="flex items-center mb-2">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>High accuracy transcription</span>
          </li>
          <li className="flex items-center mb-2">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>Email support</span>
          </li>
          <li className="flex items-center">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
            <span>No long-term commitment</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing