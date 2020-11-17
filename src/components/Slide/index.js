import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Image1 from "./Images/deklofenak.jpg" 
import Image2 from "./Images/tetraseklin.jpg" 
import Image3 from "./Images/umka.jpg" 
import Image4 from "./Images/vata.jpg" 


import 'swiper/swiper.scss';
const Slide=()=>{
  const images=[Image1, Image2, Image3, Image4];
    return(<>
    <Splide 
    options={{
      type         : 'loop',
      gap          : '1rem',
      height:'45%',
      autoplay     : true,
      pauseOnHover : false,
      resetProgress: false,
     arrows       : false,
    } }
    
    //hasAutoplayControls
    >
      {images.map(i=><SplideSlide key={i}>
         <img src={i} height="100%" alt="Imqage 1"/>
     </SplideSlide>)}
     
</Splide>
        
        </>
    )
}

export default Slide