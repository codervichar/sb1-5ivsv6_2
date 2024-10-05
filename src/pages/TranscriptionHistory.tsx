import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, FileText, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Transcription {
  id: string;
  date: string;
  time: string;
  text: string;
  audioLength: string;
}

const TranscriptionHistory: React.FC = () => {
  // Mock data for demonstration
  const transcriptions: Transcription[] = [
    { id: '1', date: '2023-05-20', time: '14:30', text: 'Remember to buy groceries...', audioLength: '0:45' },
    { id: '2', date: '2023-05-19', time: '09:15', text: 'Meeting scheduled for next...', audioLength: '1:30' },
    { id: '3', date: '2023-05-18', time: '16:45', text: 'Don\'t forget to call mom...', audioLength: '0:20' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>Transcription History - WhatsApp2Text</title>
        <meta name="description" content="View your transcription history from WhatsApp2Text." />
      </Helmet>
      <div className="mb-6">
        <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Transcription History</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Text</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audio Length</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transcriptions.map((transcription) => (
              <tr key={transcription.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-gray-400" size={16} />
                    {transcription.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Clock className="mr-2 text-gray-400" size={16} />
                    {transcription.time}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <FileText className="mr-2 text-gray-400" size={16} />
                    <span className="truncate max-w-xs">{transcription.text}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{transcription.audioLength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TranscriptionHistory