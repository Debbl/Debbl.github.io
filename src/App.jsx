import React, {memo} from 'react';
import './assets/css/reset.css';
import './assets/css/index.css';
import Home from './pages/Home';
import Footer from './components/footer';
import './assets/icon/iconfont';

export default memo(function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
});
