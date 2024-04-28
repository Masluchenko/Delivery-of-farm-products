import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/screens/Header/Header'
import Cards from './components/screens/Home/Cards/Cards'
import Carousel from './components/screens/Home/Carousel/Carousel'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Header />
     <Carousel />
     <Cards />
  </React.StrictMode>
 
)
s