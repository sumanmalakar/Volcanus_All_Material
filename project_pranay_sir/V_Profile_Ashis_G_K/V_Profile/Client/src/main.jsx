import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App_State from './context/App_state.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <App_State>
    <App />
    </App_State>
  </React.StrictMode>,
)
