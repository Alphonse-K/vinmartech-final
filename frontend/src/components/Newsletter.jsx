import React, {useState} from 'react';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const checkHandler = () => setConsent(!consent);

    const handleInput = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const result = {"email": email, "consent": consent}
      try {
        axios.post("http://localhost:8000/letter/", result)
        .then(res => console.log(res.data) )
        .catch((e) => console.log(e));
      reset();
      } catch (error) {
        console.error(error);
      }
    }
  
    const reset = () => {
      setEmail('');
      setConsent(false);
   }

  return (
      <div className='newsletter-container'>
          <div className='newsletter col-xs-12 col-sm-12 col-md-8 col-lg-8'>
            <h1><b>Vinmartech</b>,</h1>
            <h1>Préparez vous à réussir votre aventure digital! </h1>
            <h6>Recevez votre newsletter directement dans votre boîte mail</h6>
            <form onSubmit={handleSubmit} action='/endpoint' method='post'>
              <label htmlFor="news" className='d-inline-block'>votre adresse email:</label>             
              <div className='d-flex'>
                <input 
                  className='email-input col-xs-12 col-sm-8 col-md-6 col-lg-6' 
                  id='news' 
                  type='email'
                  name='email' 
                  value={email} 
                  placeholder='Votre adresse email' 
                  onChange={handleInput}
                />
                <button type='submit'><FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffff",}} /></button>
              </div>
              <div className='checkbox d-flex' >
                  <input type="checkbox" name="cheese" id="check" checked={consent} onChange={checkHandler}></input>
                  <label htmlFor="check">Votre adresse e-mail est uniquement utilisée pour vous envoyer notre newsletter et des informations sur les activités de Vinmartech. Vous pouvez toujours utiliser le lien de désinscription inclus dans la newsletter.</label>
              </div>
            </form>
          </div>
        </div>
  )
}


