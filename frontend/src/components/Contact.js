import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';


const initialValues = {
    name: "",
    email: "",
    message: "",
};

export default function Contact() {

  const [inputs, SetInputs] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInputs({...inputs, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(inputs);
    reset();
  }

  const reset = () => {
      SetInputs(initialValues);
  }

  return (
    <div id='contact'>
      <Helmet>
        <title>Vinmartech | Contact</title>
      </Helmet>
      <Navbar />
      <div className='contact-section'>
        <div className='contact-header'>
          <h1>Entrez en Contact avec Notre Équipe:</h1>
          <p>Esse ullamco officia culpa officia aliqua sunt laboris ut quis deserunt nulla nostrud ipsum. Laboris veniam pariatur ea cupidatat culpa sint reprehenderit consectetur et excepteur ullamco.</p>
        </div>
        <div id='contact-quote' className='form'>
          <div className='contact-form col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <h6>Disponible 24/7 :</h6>
            <h1>À votre écoute:</h1>
            <form onSubmit={handleSubmit}>
              <input type='text' name='name' value={inputs.name} placeholder='Nom/Prénom' onChange={handleChange}/><br />
              <input type='email' name='email' value={inputs.email} placeholder='Email' onChange={handleChange}/><br />
              <textarea type='textarea' name='message' value={inputs.message} placeholder='Votre message' onChange={handleChange}/><br />
              <input type='submit' value='ENVOYEZ VOTRE MESSAGE' />
            </form>
          </div>
          <div className='contact-address col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <div className='contact-address-elem'>
              <div className='contact-icon-text'>
                <FontAwesomeIcon icon={faLocationDot} 
                  style={{
                    color: "rgb(217, 4, 41)", 
                    fontSize: '3rem', 
                    paddingRight: '3rem',
                    }} 
                  />
                <div className='text'>
                  <h3>Adresse de l'entreprise:</h3>
                  <h5><i style={{color: 'grey'}}>Conakry, C/Ratoma - Lambanyi, Ctre Commercial</i></h5>
                </div>
              </div>
            </div>
            <div className='contact-address-elem'>
              <div className='contact-icon-text'>
                <FontAwesomeIcon icon={faPhoneVolume} 
                  style={{
                    color: "rgb(217, 4, 41)", 
                    fontSize: '3rem', 
                    paddingRight: '3rem',
                    }} 
                  />
                <div className='text'>
                  <h3>Téléphone:</h3>
                  <h5><i style={{color: 'grey'}}>+224 623 04 00 31</i></h5>
                </div>
              </div>
            </div>
            <div className='contact-address-elem'>
              <div className='contact-icon-text'>
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} 
                  style={{
                    color: "rgb(217, 4, 41)", 
                    fontSize: '3rem', 
                    paddingRight: '3rem',
                    }} 
                 />
                <div className='text'>
                  <h3>Adresse E-mail:</h3>
                  <h5><i style={{color: 'grey'}}>contact@Vinmartech.com</i></h5>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
      <BackToTop />
      <Footer />
    </div>
  )
}
