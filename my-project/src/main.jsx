import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScienceIslamique from './pages/ScienceIslamique.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ScienceIslamique" element={<ScienceIslamique />} />
    </Routes>
  </BrowserRouter>
)
