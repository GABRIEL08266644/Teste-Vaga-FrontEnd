import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routers from './routers';
import GlobalStyle from './css/style';
import Header from './views/components/Header';
import Footer from './views/components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routers/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
