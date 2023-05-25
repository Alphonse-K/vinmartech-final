import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Slide, Zoom, Bounce, Roll } from "react-awesome-reveal";

import image1 from '../img/Allura - Love is in the Air.png';
import image2 from '../img/Meeting.png';
import image3 from '../img/apps2.jpg';

import Navbar from './Navbar';
import BackToTop from './BackToTop';
import Footer from './Footer';
import ServicesItem from './ServicesItem';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';

export default function Home() {

  const [index, setIndex] = useState(0);

  const data1 = [
    {
     image: require('../img/pexels-ono-kosuki-5647594.jpg'), 
     caption:"Application mobile Android & IOS sur Mesure.",
     description:"Maintenez le contact auprès de vos clients via des Applications mobiles diverses."
    },
    {
      image:require('../img/pexels-marta-branco-1194713.jpg'), 
      caption:"Site Internet sur Mesure",
      description:"Optez pour un site internet dynamique et responsif."
     },
     {
      image:require('../img/pexels-pixabay-159304.jpg'), 
      caption:"Réseau Informatique",
      description:"Nous concevons et déployons un réseau informatique adapté à vos besoins.",
     },
  ]

  const data2 = [
    {
     image: require('../img/app5.JPG'), 
     caption:"Application mobile Android & IOS",
     description:"Maintenez le contact auprès de vos clients via des Applications mobiles diverses."
    },
    {
      image:require('../img/website.JPG'), 
      caption:"Site Vitrine sur Mesure",
      description:"Optez pour un site internet dynamique et responsif."
     },
     {
      image:require('../img/devspecific.jpg'), 
      caption:"Développements Spécifiques",
      description:"Nous serons à vos côtés pour la conception, le développement, le déploiement et la maintenance de programmes informatiques variés.",
      
     },
     {
      image:require('../img/network.jpg'), 
      caption:"Réseau Informatique",
      description:"Nous concevons et déployons un réseau informatique adapté à vos besoins.",
     },
     {
      image:require('../img/repair.png'), 
      caption:"Maintenance Informatique",
      description:"Grâce à une excellente équipe d’assistance réactive, nous nous chargeons d’assurer un service de maintenance informatique dans plusieurs domaines.",
     },
     {
      image:require('../img/camera2.JPG'), 
      caption:"Caméra de Surveillance",
      description:"La caméra de surveillance est non seulement une sécurité, une protection, mais aussi un puissant élément de dissuasion. Grâce à elle, vous pourrez éviter les effractions.", 
     },
     {
      image:require('../img/ecommerce.JPG'), 
      caption:"Site E-Commerce sur mesure",
      description:"Le commerce en ligne est devenu un atout puissant pour une entreprise, cela permet un développement plus important de la notoriété et l’attraction de nouveaux clients; Alors on y va.", 
     },
  ]
  const handleSelect = (selectIndex, e) => {
      setIndex(selectIndex);
  }


  return (
    <div>
      <Helmet>
        <title>Vinmartech | Bienvue chez nous!</title>
      </Helmet>
      <Navbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data1.map((slide, i) => {
          return (
            <Carousel.Item key={i}>        
              <img
                className="d-block w-100 carousel"
                src={slide.image}
                alt="images"
              />
              <Carousel.Caption key={i} className='d-flex flex-column justify-content-center h-100'>
                <Zoom>
                  <h2 className='captionh2'>{slide.caption}</h2>
                </Zoom>
                <Slide direction='right'>            
                  <p className='captionp'>{slide.description}</p>
                </Slide>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}   
      </Carousel>
      <div className='home1 d-flex align-items-center justify-content-center'>
        <Roll direction='left' triggerOnce='true'>               
          <div className='image1Content col-sx-12'>
            <img src={image1} alt="Two talking ladies" className='homeImage1'/>
          </div>
        </Roll>
        <Zoom>
          <div className='homeParagh col-sx-12'>
            <p>Mollit magna eu pariatur exercitation tempor Lorem in. Non consequat aliquip mollit nostrud minim sunt eu nulla nulla laborum aliquip. Et cillum consectetur labore nostrud est anim qui enim amet sit nulla minim ad elit.</p>
          </div>
        </Zoom>
      </div>
      <div className='presentations'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 '>
            <h1 style={{fontFamily: 'Georgia, Times New Roman Times, serif'}}>Pourquoi travailler avec Vinmartech ?</h1>
            <p style={{fontFamily: 'Georgia, Times New Roman Times, serif'}}>Notre cabinet est spécialisé dans la conception de sites Web professionnels, d'application mobile Android et/ou IOS et de programmes informatiques divers. Nous sommes passionnés par des créations qui reflètent l’identité de nos clients et qui leur permettent de se démarquer de la concurrence.</p>
            <p style={{fontFamily: 'Georgia, Times New Roman Times, serif'}}>Nous vous aidons à créer une présence en ligne efficace et mémorable. Nous offrons une gamme complète de services, notamment la conception personnalisée de sites Web, le développement d'applications informatiques variées, le SEO, l’hébergement, la maintenance et la sécurité.</p>
            <HashLink to="/expertises#home" className='link'><button>Expertises</button></HashLink>
          </div> 
          <div className='d-flex justify-content-center col-xs-12 col-sm-12 col-md-6 col-lg-6 '>
          <Bounce>
            <img className='image2' src={image2} alt="Meeting"/>
          </Bounce>
          </div>
      </div>
        <div className='services-title'><h1>Nos Prestations</h1></div>
        <Zoom triggerOnce={true}>
        <div className='services'>
          {data2.map((item, i) => {
            return (
              <ServicesItem 
                image={item.image} 
                title={item.caption} 
                description={item.description} 
                key={i} 
              />)})}
        </div>
        <div className='service-detail'>
          <HashLink to="/expertises#home" className='link'><button>Expertises</button></HashLink>           
        </div>
      </Zoom>
      <Slide>
        <div className='digital'>
            <div className='digital-text col-xs-12 col-sm-12 col-md-6 col-lg-6'><h1>Adopter une stratégie de digitalisation est très favorable à l’amélioration des relations avec la clientèle, donner de la visibilité à votre activité, maintenir le lien avec vos clients. </h1>
            </div>
          <img className='col-xs-12 col-sm-12 col-md-6 col-lg-6' src={image3} alt='' />
        </div>
      </Slide>
    <div className='about' id='about'>
      <div className='about-header col-xs-12 col-sm-12 col-md-6 col-lg-6'>
        <h1>À propos de nous:</h1>
        <div style={{width: '50%'}}>
        <hr style={{color: 'red'}}/>
        </div>
      </div>
      <div className='about-body'>
        <div className='text col-xs-12 col-sm-12 col-md-6 col-lg-6'>
          <p>Ut in pariatur Lorem velit minim deserunt cupidatat velit fugiat minim. Et dolore laboris cupidatat consectetur fugiat fugiat ipsum culpa eiusmod nulla eiusmod veniam sunt. Labore commodo consectetur anim exercitation. Sunt consequat minim laborum sunt duis. Sit nisi eu reprehenderit anim nostrud consequat culpa velit laboris id.</p>
          <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
        </div>
        <img src={require('../img/pexels-pixabay-38544.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-6 col-lg-6' />
      </div>
    </div>
    <Testimonials />
    <Newsletter />
    <BackToTop />
    <Footer />
    </div>
  )
}