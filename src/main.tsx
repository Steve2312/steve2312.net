import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import './index.css'
import './config/i18n.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <React.Suspense>
          <App />
      </React.Suspense>
  </React.StrictMode>,
)
