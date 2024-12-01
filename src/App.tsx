import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sheet from './pages/Sheet';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sheet" element={<Sheet />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;