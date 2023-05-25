import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Flip } from 'react-awesome-reveal'
import { Helmet } from 'react-helmet-async';

export default function NoPage() {
  return (
    <div>
      <Helmet>
        <title>Vinmartech | Cette page n'existe pas!</title>
      </Helmet>
      <Navbar />
      <div className='errorContainer' style={{
        display: 'flex',  
        justifyContent: 'center', 
        alignContent: 'center'}}>
        <Flip triggerOnce={false}>
          <div className='error'>
            <h1> Oop's 404</h1>
            <p>Cette page n'existe pas!</p>
          </div>
        </Flip>
      </div>
      <Footer />
    </div>
  )
}
