import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScienceIslamique from './pages/ScienceIslamique.jsx'
import Science from './pages/Science.jsx'
import './index.css'
import Medecine from './pages/Medecine.jsx'
import Pharmacy from './pages/Pharmacy.jsx'
import Droit from './pages/Droit.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ScienceIslamique" element={<ScienceIslamique />} />
      <Route path="/Science" element={<Science />} />
      <Route path="/Medecine" element={<Medecine />} />
      <Route path="/Pharmacy" element={<Pharmacy />} />
      <Route path="/Droit" element={<Droit />} />
    </Routes>
  </BrowserRouter>
)
