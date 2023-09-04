import React, { useState } from 'react'
import slides from "../data/slider.json";
import '../styles/slider.css';
import {BsArrowLeftCircle,BsArrowRightCircle} from "react-icons/bs";

function Slider() {
  const [slide,setSlide]=useState(0);
  const nextSlide=()=>{
    setSlide(slide===slides.length-1?0:slide+1)
  }
  const prevSlide=()=>{
    setSlide(slide===0?slides.length-1:slide-1)
  }
  return (
    <>
      <div className="Carousel">
        <div className="titledesc">
          <div className='content'>
          {slides.map((item, idx) => {
            return <h1 id="titlesh" className={slide===idx?"slide":"slide slide-hidden"} >{item.title}
            <p id='desc' className={slide===idx?"slide":"slide slide-hidden"}>{item.desc}</p></h1>
          })}
          <button id="watch">Watch</button>
          </div>
          
        </div>

        <div className='tbnail'>
          
          {slides.map((item, idx) => {
            return <img src={item.src} alt={item.alt} key={idx} className={slide===idx?"slide":"slide slide-hidden"} />
          })}
          
        </div>
      </div>
      <div className='controller'>
      <div className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </div>
      <div className='arrow-contoller'>
          <BsArrowLeftCircle className='arrow arrow-left' onClick={prevSlide}/>
          <BsArrowRightCircle className='arrow arrow-right' onClick={nextSlide}/>
      </div>
      </div>

    </>
  )
}

export default Slider