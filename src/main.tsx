import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import './config/i18n.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <React.Suspense>
          <Home />
      </React.Suspense>
  </React.StrictMode>,
)
