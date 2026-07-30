import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TransferByLocation from './pages/TransferByLocation';
import Train from './pages/Train';
import Air from './pages/Air';
import Road from './pages/Road';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import HMRuae from './pages/HMRuae';
import Privacypolicy from './pages/Privacypolicy';

// =======================================================


import Blogs from "./Blogs/Blogs";
import Blog1 from "./Blogs/Blog-1";
import Blog2 from "./Blogs/Blog-2";
import Blog3 from "./Blogs/Blog-3";



// ------------------ADS
import Demo from './ads/Demo';
import DAir from './ads/DAir';
import Dcost from './ads/Dcost';
import DMain from './ads/DMain';
import DMumbai from './ads/DMumbai';
import DelhiAds from './ads/DelhiAds';
import Hyderebad from './ads/HydAds';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/transfer-by-mode/train" element={<Train />} />
        <Route path="/transfer-by-mode/air" element={<Air />} />
        <Route path="/transfer-by-mode/road" element={<Road />} />
        <Route path="/transfer-by-location" element={<TransferByLocation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hmruae" element={<HMRuae />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />

        {/* ---------ads------------ */}
        <Route path="/dead-body-transfer-by-road" element={<Demo />} />
        <Route path="/dead-body-transfer-by-air" element={<DAir />} />
        <Route path="/dead-body-transfer-cost" element={<Dcost />} />
        <Route path="/dead-body-transfer" element={<DMain />} />\
        <Route path="/dead-body-transfer-in-mumbai" element={<DMumbai />} />
        <Route path='/dead-body-transfer-in-delhi' element={<DelhiAds />} />
        <Route path="/dead-body-transfer-in-telangana-and-andhra-pradesh" element={<Hyderebad />} />




        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/blog-1" element={<Blog1 />} />
        <Route path="/blog/blog-2" element={<Blog2 />} />
        <Route path="/blog/blog-3" element={<Blog3 />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
