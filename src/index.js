import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './components/App/App'
import AuthProvider from './hoc/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
