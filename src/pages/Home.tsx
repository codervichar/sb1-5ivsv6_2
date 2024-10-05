import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Headphones, FileText, FileAudio, FileVideo } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Convert WhatsApp Audio to Text</h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8">Easily transcribe your voice messages with our WhatsApp audio-to-text service.</p>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Get Started</Link>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="text-center p-4 bg-white rounded-lg shadow-md">
          <MessageSquare size={40} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Send Audio</h2>
          <p className="text-sm sm:text-base">Send your WhatsApp voice messages to our dedicated number.</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-md">
          <Headphones size={40} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">We Process</h2>
          <p className="text-sm sm:text-base">Our advanced AI transcribes your audio messages accurately.</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-md">
          <FileText size={40} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Receive Text</h2>
          <p className="text-sm sm:text-base">Get the transcribed text back quickly and effortlessly.</p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 sm:p-8 rounded-lg mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Why Choose WhatsApp2Text?</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>Quick and accurate transcriptions</li>
          <li>Easy to use - just send your audio via WhatsApp</li>
          <li>Affordable monthly subscription plans</li>
          <li>Secure and confidential service</li>
          <li>Compatible with all WhatsApp-supported devices</li>
        </ul>
      </section>

      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Supported File Types</h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
              <FileAudio className="mr-2 text-blue-600" />
              Audio Formats
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>MP3 (MPEG Audio Layer-3)</li>
              <li>WAV (Waveform Audio File Format)</li>
              <li>FLAC (Free Lossless Audio Codec)</li>
              <li>M4A (MPEG-4 Audio)</li>
              <li>AAC (Advanced Audio Coding)</li>
              <li>OGG (Ogg Vorbis/Opus)</li>
              <li>Opus</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
              <FileVideo className="mr-2 text-blue-600" />
              Video Formats (with audio)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>MP4 (MPEG-4 Part 14)</li>
              <li>MPEG (Moving Picture Experts Group format)</li>
              <li>WEBM (WebM Video File Format)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home