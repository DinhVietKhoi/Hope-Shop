import  '../sass/featured.scss'
import '../sass/base.scss'

import Product from './Product'
import { useRef, useState } from 'react';

function Featured(props) {
  const [extend,setExtend] = useState(true)
  const more = useRef(null);
  const less = useRef(null);
  // console.log(extend);

  const handleExtend = ()=>{
    setExtend(false);
    less.current.style.display = 'block'
    more.current.style.display = 'none'
  }
  const handleRetract = ()=>{
    setExtend(true);
    less.current.style.display = 'none'
    more.current.style.display = 'block'
  }
  return (
    <div className='featured'>
        <div className='container'>
            <div className='featured__title'>
                <h4>Featured</h4>
            </div>
        <div className="row featured__container">
            <Product
              extend={extend}
              addProduct={props.addProduct}
              listProduct = {props.listProduct}
            />
            <div className='featured__extend'>
              <button onClick={handleExtend} ref={more}>Load more...</button>
              <button onClick={handleRetract} ref={less}>Load less...</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured