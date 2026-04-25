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

// =======================================================


import Blogs from "./pages/Blogs/Blogs";
import Blog1 from "./pages/Blogs/Blog-1";
import Blog2 from "./pages/Blogs/Blog-2";
import Blog3 from "./pages/Blogs/Blog-3";

import Demo from './pages/Demo';

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
        <Route path="/dead-body-transfer" element={<Demo />} />
        <Route path="/hmruae" element={<HMRuae />} />


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
