import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'
import Pricing from './pages/Pricing'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import TranscriptionHistory from './pages/TranscriptionHistory'
import UpdateProfile from './pages/UpdateProfile'

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/transcription-history" element={<TranscriptionHistory />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App