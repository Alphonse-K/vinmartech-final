import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {HashLink}  from 'react-router-hash-link';

export default function Footer() {

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(217, 4, 41)" fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,208C384,256,480,288,576,272C672,256,768,192,864,176C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className='footerParent d-flex'>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 '>      
              <HashLink to="/#home" className='logoLink'><h1 className="logo">Vinmartech-Sarlu</h1></HashLink>
              <div className='footerText'>
                <p><small>VINMARTECH-SARLU</small> est une agence web spécialisée dans la création de site internet, d'application mobile, ERP / CRM, et
                  référencement naturel. Nous disposons en interne de toutes les compétences nécessaires au
                  développement de vos projets.
                </p>
              </div>
              <div className='footerText'>
                <p>est une agence web spécialisée dans la création de site internet, application mobile, ERP / CRM, et
                  référencement naturel. Nous disposons en interne de toutes les compétences nécessaires au
                  développement de vos projets.
                </p>
              </div>
            </div>
            <div className='footer-service col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                <h3>Service</h3>
                <HashLink className='logoLinkFooter' to='/expertises#specific'><h6>Développements Spécifiques</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#repair'><h6>Maintenance Informatique</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#surveillance'><h6>Caméra de Surveillance</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#network'><h6>Réseau Informatique</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#app'><h6>Application Mobile</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#ecommerce'><h6>Site E-Commerce</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#vitrine'><h6>Site Vitrine</h6></HashLink>
            </div>
            <div className='footer-service col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                <h3>Liens Utiles</h3>
                <HashLink className='logoLinkFooter' to='/#home'><h6>Accueil</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/#about'><h6>À propos</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/expertises#expertises'><h6>Expertises</h6></HashLink>
                <HashLink className='logoLinkFooter' to='/contact#contact'><h6>Contact</h6></HashLink>
            </div>

            <div className='footer-contact col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                <h3>Contact</h3>
                <h6>Lundi - Vendredi / 8h30 - 18h</h6>
                <div className='footerIconFb d-flex justify-content-center'>
                  <FontAwesomeIcon className='iconFb' icon={faFacebookSquare} style={{color: "#014dd0",}} />
                  <Link to="/" className='logoLinkFooter'><h6>Facebook</h6></Link>
                </div>
                <div className='footerIconInsta d-flex justify-content-center'>
                  <FontAwesomeIcon className='iconInsta' icon={faInstagramSquare} style={{color: "#dd5427",}} />
                  <Link to="/" className='logoLinkFooter'><h6>Instagram</h6></Link>
                </div>
            </div>
      </div>
    </>
  )
}
