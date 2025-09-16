
import { createRoot } from 'react-dom/client'
import {AuthProvider} from './context/AuthContext'
import './styles/index.css'
import App from './App'

document.body.className = 'theme-light'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
