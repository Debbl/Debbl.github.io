import React, { memo } from 'react'
import "./assets/css/reset.css"

import Home from './pages/Home'
import Footer from './components/footer'

export default memo(function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  )
})
