import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/screens/Header/Header'
import Home from './components/screens/Home/Home'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Header />
     <Home />
  </React.StrictMode>
 
)
