import React, {useState} from 'react'
import { SliderData } from './slider-data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "./image-slider.styles.scss";

 const ImageSlider = ({slides}) => {
 const [current, setCurrent] = useState(0)
 const length = slides.length;

 const nextSlide = () => (
    setCurrent(current === length - 1 ? 0 : current + 1)
 )
 const prevSlide = () => (
    setCurrent(current === 0 ? length -1 : current - 1)
 )

 console.log(current);

 // if no data
 if(!Array.isArray(slides) || slides.length <= 0){
     return null;
 }


  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

    {
        SliderData.map((slide, index) => {
            
           return(
               <div className={index === current ? 'slide active' : 'slide' } key={index} >
                   {index === current && (
                       <img src={slide.imageUrl} alt='carousel' className="image" />
                   ) }
                    <div className='content'>
                       <h1 className='title'>{ slide.title.toUpperCase() }</h1>
                       <span className='subtitle'>{ slide.description }</span>
                    </div>

               </div>
           )
        }) 
                   
    }
    </section>
  )
}

export default ImageSlider;
