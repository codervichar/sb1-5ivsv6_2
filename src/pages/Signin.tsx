import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '../context/AuthContext'

const Signin: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend for authentication
    console.log('Signin data:', { email, password })
    // Simulate a successful login
    login()
    navigate('/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Helmet>
        <title>Sign In - WhatsApp2Text</title>
        <meta name="description" content="Sign in to your WhatsApp2Text account to manage your subscription and access your transcriptions." />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Sign In to WhatsApp2Text</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <div className="flex items-center border rounded-md">
            <User size={20} className="ml-2 text-gray-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <div className="flex items-center border rounded-md">
            <Lock size={20} className="ml-2 text-gray-400" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Sign In
        </button>
        <div className="mt-4 text-center text-sm">
          <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">Forgot Password?</Link>
        </div>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-800">Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Signin