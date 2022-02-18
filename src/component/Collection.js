import '../sass/collection.scss'
import '../sass/base.scss'

import rightIcon from '../assets/footer_subcribe.png'
import banner0 from '../assets/banner-1.jpg'
import banner1 from '../assets/banner-2.jpg'
import banner2 from '../assets/banner-3.jpg'
import banner3 from '../assets/banner-4.jpg'
import banner4 from '../assets/banner-5.jpg'
import { Link } from 'react-router-dom'
function Collection() {
    const imageList = [
        {
            id:0,
            image:banner0
        },
        {
            id:1,
            image:banner1
        },
        {
            id:2,
            image:banner2
        },
        {
            id:3,
            image:banner3
        },
        {
            id:4,
            image:banner4
        },
    ]
  return (
    <div className='collection'>
        <div className='container'>
            <div className='collection__container'>
                {imageList.map((i,index) =>[
                    <div key={index} className='collection__frame'>
                        <img className='collection__image' src={i.image}></img>
                        <span className='collection__title'>collection for ladies</span>
                        <Link to="/Products" className='collection__button'>
                            Shop The Collection
                            <img src={rightIcon}></img>
                        </Link>
                    </div>
                ]
                    
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Collection