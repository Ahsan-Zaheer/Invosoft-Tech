// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import Navbar from './components/home_sections/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/pages/Home';

import {
  Route,
  Routes
} from 'react-router-dom';
import About from './components/pages/About'
import WhatWeDo from './components/pages/WhatWeDo';
import Services from './components/pages/Services';
import Error from './components/pages/Error';
import BringIdeaToLife from './components/pages/subPages/BringIdeaToLife';
import Contact from './components/Contact';
import IncreaseDigitalEnergy from './components/pages/subPages/IncreaseDigitalEnergy';
import GetInTouch from './components/pages/GetInTouch';
import ScrollToTop from './components/ScrollToTop'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Design from './components/pages/Design';
import Development from './components/pages/Development';
import ContentCreation from './components/pages/ContentCreation';
import SEO from './components/pages/SEO';
import Marketing from './components/pages/Marketing';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className='container-fluid m-0 p-0'>
      <HelmetProvider>
      
      <Navbar logo={logo} />
      <Helmet>
        <meta name="google-site-verification" content="0tmZwXN7dXJe1oE2X7PD01caNJ8UNGIhSMhvf8YRrUk" />
      </Helmet>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About/>} />
          <Route path='/what-we-do' element={ <WhatWeDo/>} />
          <Route path='/bring-idea-to-life' element={ <BringIdeaToLife/>} />
          <Route path='/increase-digital-energy' element={ <IncreaseDigitalEnergy/>} />
          <Route path='/services' element={ <Services/>} />
          <Route path='/get-in-touch' element={ <GetInTouch/>} />
          <Route path='/contact' element={ <GetInTouch/>} />
          <Route path='/services/design' element={ <Design/>} />
          <Route path='/services/development' element={ <Development/>} />
          <Route path='/services/content-creation' element={ <ContentCreation/>} />
          <Route path='/services/search-engine-optimization' element={ <SEO/>} />
          <Route path='/services/Marketing' element={ <Marketing/>} />
          <Route path='*' element={ <Error/>} />

        </Routes>
      <Contact/>
      </HelmetProvider>

    </div>
  );
}

export default App;
