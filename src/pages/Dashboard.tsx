import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, CreditCard, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Pro',
    transcriptionsLeft: 87,
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>Dashboard - WhatsApp2Text</title>
        <meta name="description" content="Manage your WhatsApp2Text account, view your transcriptions, and update your subscription." />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Welcome, {user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" />
            Transcriptions
          </h2>
          <p className="text-gray-600">Transcriptions left this month: {user.transcriptionsLeft}</p>
          <Link to="/transcription-history" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            View History
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2 text-blue-600" />
            Subscription
          </h2>
          <p className="text-gray-600">Current Plan: {user.plan}</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Manage Subscription
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Settings className="mr-2 text-blue-600" />
            Account Settings
          </h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <Link to="/update-profile" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard