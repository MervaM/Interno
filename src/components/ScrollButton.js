import React, {useState} from 'react';
// import {FaArrowCircleUp} from 'react-icons/fa';
import arrow from '../assets/arrow_up.png'


function ScrollButton() {
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
        behavior: 'auto'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <button className='scroll__btn'>
     <img src={arrow} icon='fa-solid fa-chevron-up' onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}  />
    </button>
  );
}


export {ScrollButton};