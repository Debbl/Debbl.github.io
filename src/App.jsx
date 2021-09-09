import React, { memo } from 'react';
import "./assets/css/reset.css";

import Mine from './pages/mine';
import Footer from './components/footer';

export default memo(function App() {
  return (
    <div>
      <Mine/>
      <Footer/>
    </div>
  )
})
