import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import '../sass/base.scss'
import '../sass/logo.scss'
import '../sass/base.scss'
import logo_brand from '../assets/logo_brand.jpg'
import logo_brand1 from '../assets/logo_brand1.jpg'
import logo_brand2 from '../assets/logo_brand2.jpg'
import logo_brand3 from '../assets/logo_brand3.jpg'


function Logo() {
    const listLogo = [
        {
            id:1,
            logo:logo_brand
        },
        {
            id:2,
            logo:logo_brand1
        },
        {
            id:3,
            logo:logo_brand2
        },
        {
            id:4,
            logo:logo_brand3
        },
        {
            id:5,
            logo:logo_brand
        },
        {
            id:6,
            logo:logo_brand1
        },
        {
            id:7,
            logo:logo_brand2
        },
        {
            id:8,
            logo:logo_brand3
        },
        {
            id:9,
            logo:logo_brand
        },
        {
            id:10,
            logo:logo_brand1
        }
    ]
    const logoList = useRef(null);
    const logoItem = useRef([]);
    let widthCurrent = 0;
    const handleNext = ()=>{
        widthCurrent+=logoItem.current.offsetWidth;
        if(widthCurrent<=logoItem.current.offsetWidth*5){
            logoList.current.style.transform = `translateX(-${widthCurrent}px)`
        }
        else {
            logoList.current.style.transform = `translateX(0px)`
            widthCurrent=0
        }
    }
    const handlePre = ()=>{
        widthCurrent-=logoItem.current.offsetWidth;
        if(widthCurrent>=0){
            logoList.current.style.transform = `translateX(-${widthCurrent}px)`
        }
        else {
            logoList.current.style.transform = `translateX(-788px)`
            widthCurrent=logoItem.current.offsetWidth*5
        }

    }
   
    
  return (
    <div className="logo">
        <div className='container'>
            <div className='row logo__container' ref={logoList}>
                {
                    listLogo.map(l =>[
                        <div key={l.id} className='col c-2 l-3 m-4 n-6' ref={logoItem}>
                            <Link to='/'><img src={l.logo}></img></Link>
                        </div>
                    ])
                }                
            </div>
            <div className='logo__click-button logo__click-next' onClick={handleNext}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className='logo__click-button logo__click-pre' onClick={handlePre}>
                    <i className="fa-solid fa-arrow-left-long"></i>
                </div>    
        </div>
    </div>
  )
}

export default Logo