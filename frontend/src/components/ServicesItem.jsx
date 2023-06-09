import React from 'react';

export default function ServicesItem(props) {

  return (
    <>
    <div className='item col-xs-12 col-sm-12 col-md-4 col-lg-3 '>
        <img className='service-img-container' src={props.image}  alt='' />
        <div className='item-title'><h5>{props.title}</h5></div> 
        <div className='service-description'>
            <h3 style={{fontFamily: 'Georgia, Times New Roman Times, serif'}}>Take Away:</h3>
            <p style={{fontFamily: 'Georgia, Times New Roman Times, serif'}}>{props.description}</p>
        </div>
    </div>
    </>
  )
}
