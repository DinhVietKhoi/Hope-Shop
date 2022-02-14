import  '../sass/featured.scss'
import '../sass/base.scss'

import Product from './Product'

function Featured() {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='featured__title'>
                <h4>Featured</h4>
            </div>
        <div className="row featured__container">
            <Product />
            <div className='featured__extend'>
              <button>Load more...</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured