
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Immediately check if the user prefers dark mode and set it as a class on the document
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (systemPrefersDark) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Get theme from local storage or default to system preference
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
