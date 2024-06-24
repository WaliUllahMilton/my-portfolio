import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PageTransition from './components/PageTransition.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <PageTransition>
      <App />
        
      </PageTransition>
    </Router>
  </React.StrictMode>,
)
