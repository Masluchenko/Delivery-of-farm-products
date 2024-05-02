import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './components/screens/Home/Home'
import {BrowserRouter} from "react-router-dom";
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
 
)
