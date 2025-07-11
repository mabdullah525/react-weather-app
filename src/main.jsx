import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Myapp from './Components/Myapp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myapp />
  </StrictMode>,
)
