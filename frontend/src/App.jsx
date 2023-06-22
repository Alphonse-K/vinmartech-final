import React,{ useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Expertises from './components/Expertises';
import Spinner from './components/Spinner';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';



function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <HelmetProvider>
      {
        loading 
        ? <Spinner />
        :
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="expertises" element={<Expertises />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <BackToTop />
          <Footer />
        </BrowserRouter>
      }
    </HelmetProvider>
  );
}

export default App;
