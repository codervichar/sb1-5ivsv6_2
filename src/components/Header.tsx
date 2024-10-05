import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MessageSquare, Menu, X, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare size={24} />
            <span className="text-xl font-bold">WhatsApp2Text</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-200">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
              {isAuthenticated ? (
                <>
                  <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
                  <li>
                    <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/signin" className="hover:text-blue-200">Sign In</Link></li>
                  <li><Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">Sign Up</Link></li>
                </>
              )}
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700">
          <ul className="flex flex-col">
            <li><Link to="/" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/pricing" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>Pricing</Link></li>
            <li><Link to="/blog" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>Blog</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>Dashboard</Link></li>
                <li className="px-4 py-2">
                  <button onClick={() => { handleLogout(); toggleMenu(); }} className="w-full text-center bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/signin" className="block py-2 px-4 hover:bg-blue-800" onClick={toggleMenu}>Sign In</Link></li>
                <li className="px-4 py-2">
                  <Link to="/signup" className="block w-full text-center bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header