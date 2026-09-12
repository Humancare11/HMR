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
import NotFound from './pages/NotFound';

// ─── Blogs ────────────────────────────────────────────────
import BlogMain from './pages/Blogs/BlogMain';
import Blog1 from './pages/Blogs/DeadBodyTransportIndia';
import Blog2 from './pages/Blogs/DeadBodyAmbulanceService';
import Blog3 from './pages/Blogs/HowtoTransportDeadBody';
import Blog4 from './pages/Blogs/DeadBodyTransportCostIndia';
import Blog5 from './pages/Blogs/DeadBodyTransportHospitalToHome';
import Blog6 from './pages/Blogs/DeadBodyAmbulanceVsRegularAmbulance'
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

        {/* ─── Blog Routes ─────────────────────────── */}
        <Route path="/blogs" element={<BlogMain />} />
        <Route path="/blogs/dead-body-transport-india" element={<Blog1 />} />
        <Route path="/blogs/dead-body-ambulance-service" element={<Blog2 />} />
        <Route path="/blogs/dead-body-transport-one-city-to-another" element={<Blog3 />} />
        <Route path="/blogs/dead-body-transport-cost-india" element={<Blog4 />} />
        <Route path="/blogs/dead-body-transport-hospital-to-home" element={<Blog5 />} />
        <Route path="/blogs/dead-body-ambulance-vs-regular-ambulance" element={<Blog6 />} />
        {/* ---------ads------------ */}
        <Route path="/dead-body-transfer-by-road" element={<Demo />} />
        <Route path="/dead-body-transfer-by-air" element={<DAir />} />
        <Route path="/dead-body-transfer-cost" element={<Dcost />} />
        <Route path="/dead-body-transfer" element={<DMain />} />
        <Route path="/dead-body-transfer-in-mumbai" element={<DMumbai />} />
        <Route path='/dead-body-transfer-in-delhi' element={<DelhiAds />} />
        <Route path="/dead-body-transfer-in-telangana-and-andhra-pradesh" element={<Hyderebad />} />




        {/* 404 Page  */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
