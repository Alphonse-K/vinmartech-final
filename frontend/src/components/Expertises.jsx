import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { Bounce, Slide } from 'react-awesome-reveal';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';


export default function Expertises() {
  return (
    <div id='expertises'>
      <Helmet>
        <title>Vinmartech | Parcourez nos différentes Prestations.</title>
      </Helmet>
        <Navbar/>
        <div className='expertise-header'>
          <img src={require('../img/desktop.jpg')} alt='' />
          <section className='expertise-text'>
            <Bounce>
              <h1>Simplifier votre quotidien par le billet de produits digitaux innovants, tel est notre objectif.</h1>
            </Bounce>
            <HashLink to='#button'>
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>  
            </HashLink>
          </section>
        </div>
        <div className='expertise-intro'>
          <h1>Nous Offrons</h1>
          <h1>Une Meilleure Qualité</h1>
          <h1>De Service en Développements Informatique !</h1>
          <p>« La marque d’une entreprise est comme la réputation de quelqu’un : vous la développez en effectuant un travail remarquable sur des tâches difficiles. »</p>
          <h6>— Jeff Bezos, fondateur et dirigeant d’Amazon</h6>
          <HashLink to="/contact#contact-quote"><button>Obtenez un Devis</button></HashLink>
        </div>
        <div className='expertise-title' id='button'><h1>Voici ce que nous proposons:</h1></div>
        <section className='expertise-details'>
          <Slide cascade triggerOnce={true}>
          <div id='specific' className='container-img-text'>
            <img src={require('../img/christopher.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
            <div className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'>
              <h2>Développements Spécifiques:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>      
          </div>
          <div id='repair' className='container-img-text'>
            <div 
              className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'
              style={{backgroundColor: 'rgba(217, 4, 41, .49)'}}
              >
              <h2>Maintenance Informatique:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>
            <img src={require('../img/fix-comp.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
          </div>
          <div id='surveillance' className='container-img-text'>
            <img src={require('../img/camera3.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
            <div className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'>
              <h2>Caméras de Surveillance:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>      
          </div>
          <div id='network' className='container-img-text'>
            <div 
              className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'
              style={{backgroundColor: 'rgba(217, 4, 41, .49)'}}
              >
              <h2>Réseau Informatique:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>
            <img src={require('../img/comp-network.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
          </div>
          <div id='app' className='container-img-text'>
            <img src={require('../img/mobile-app.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
            <div className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'>
              <h2>Applications Mobile Android & IOS:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>      
          </div>
          <div id='ecommerce' className='container-img-text'>
            <div 
              className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'
              style={{backgroundColor: 'rgba(217, 4, 41, .49)'}}
              >
              <h2>Site E-Commerce Responsif:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>
            <img src={require('../img/ecommerce-2.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
          </div>
          <div id='vitrine' className='container-img-text'>
            <img src={require('../img/vitrine-1.jpg')} alt='' className='col-xs-12 col-sm-12 col-md-3 col-lg-4'/>
            <div className='expertise-single-text col-xs-12 col-sm-12 col-md-3 col-lg-4'>
              <h2>Site Vitrine Responsif:</h2>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>      
          </div>
        </Slide>
        </section>
        {/* <div>Expertises</div>
        <div>Expertises</div> */}
        <BackToTop />
        <Footer/>
    </div>
  )
}
