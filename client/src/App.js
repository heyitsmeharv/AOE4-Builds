import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/auth';

import Home from './pages/Home';
import Login from './pages/Login';

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
