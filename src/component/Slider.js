import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import sliderImg from '../assets/slide1_image.jpg'
import sliderImg1 from '../assets/slide2_image.jpg'
import '../sass/base.scss'
import '../sass/slider.scss'

function Slider() {
    const slider =[
        {
            id:1,
            image:sliderImg,
            content:'HAND CUT AND CRAFTED IN SOFT NENUINE LEATHER',
            title: 'LEATHER BAGS'
        },
        {
            id:2,
            image:sliderImg1,
            content:'MAD FOR SUMMER',
            title: 'STRIPES'
        }
    ]
    const [image , setImage] = useState(slider[0]);
    const handleNext =()=>{
            // console.log(image.id);
        if(image.id === 1){
            setImage(slider[1])
        }
        else 
            setImage(slider[0])
        
    }
    const handlePre =()=>{
        // console.log(image.id);
        
        if(image.id === 1){
            setImage(slider[1])
        }
        else 
            setImage(slider[0])
    }
    useEffect(()=>{
        const interval =  setInterval(() => {
            // console.log(image.id)
            if(image.id===1){
                setImage(slider[1])
            }
            else 
                setImage(slider[0])        
        }, 5000)
        return ()=> clearInterval(interval);
    },[image]);
  return (
    <div className='slider'>
            <div className='slider__img'>
                {image.id===1&&<img src={image.image} alt="slider" style={{animation: 'loadSlider 0.5s linear'}}></img>}
                {image.id===2&&<img src={image.image} alt="slider" style={{animation: 'loadSlider 0.5s linear'}}></img>}
            </div>
            {image.id===1&&<div className='slider__progress'></div>}
            {image.id===2&&<div className='slider__progress'></div>}
            <Link onClick={handleNext} className='slider__click-button slider__click-next' to=''>
                <i className="fa-solid fa-angle-right"></i>
            </Link>
            <Link onClick={handlePre} className='slider__click-button slider__click-pre' to=''>
                <i className="fa-solid fa-angle-left"></i>
            </Link>        
            {image.id===1&&<h4 className="slider__content" style={{animation: 'loadSlider 0.5s linear'}}>{image.content}</h4>}
            {image.id===1&&<h2 className="slider__title">{image.title}</h2>}
            {image.id===2&&<h4 className="slider__content" style={{animation: 'loadSlider 0.5s linear'}}>{image.content}</h4>}
            {image.id===2&&<h2 className="slider__title" >{image.title}</h2>}
        <div className='slider__button'>
            <Link className='slider__button-min' to="/">EXPLORER</Link>
            <Link className='slider__button-min' to="/">SHOPPING NOW</Link>
        </div>  
    </div>
  )
}

export default Slider