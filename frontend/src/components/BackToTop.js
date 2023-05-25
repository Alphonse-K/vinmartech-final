import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const BackToTop = () => {
   
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300){
            setVisible(true)
            } 
            else if (scrolled <= 300){
            setVisible(false)
            }
        };
        
        const scrollToTop = () =>{
            window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            });
        };
        
        window.addEventListener('scroll', toggleVisible);

    return (
        
        <FontAwesomeIcon 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}
            className='backtotop' 
            icon={faArrowUp}
        />
    )
}

export default BackToTop
