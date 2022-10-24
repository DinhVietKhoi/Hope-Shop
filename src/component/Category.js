import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

import banner_products from '../assets/banner_products.jpg'
import banner_left from '../assets/banner_left.jpg'
import '../sass/category.scss'
import '../sass/base.scss'
import product1 from '../assets/product1.jpeg'
import product2 from '../assets/product2.jpeg'
import product3 from '../assets/product3.jpeg'
import product4 from '../assets/product4.jpeg'


function Category(props) {
  const [text,setText] =useState('ALL PRODUCTS')
  const [products,setproducts] = useState('A');

const collecElement = useRef([]);

const handleWatches = ()=>{
  // setText
  setText("Men's clothing");
  setproducts("men's clothing")
}
const handleClo = ()=>{
  // setText
  setText("Jewelery");
  setproducts('jewelery')
}
const handleBack = ()=>{
  // setText
  setText("Electronics");
  setproducts('electronics')
}
const handleGlass = ()=>{
  // setText
  setText("women's clothing");
  setproducts("women's clothing")
}
const handleAll = ()=>{
  // setText
  setText("ALL PRODUCTS");
  setproducts('A')
}
console.log(products);
  return (
    <>
      <div className='category col c-3 m-12'>
        <div className='category__collection'>
          <h4>COLLECTION</h4>
          <ul className='category__collection-list' ref={collecElement}>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='' onClick={handleWatches} >
                Men's clothing
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='' onClick={handleClo} >
                Jewelery
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='' onClick={handleBack} >
                Electronics
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='' onClick={handleGlass} >
                Women's clothing
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='' onClick={handleAll}>
                ALL PRODUCT
              </Link>
            </li>
          </ul>
        </div>
        <div className='category__collection'>
          <h4>COLOR</h4>
          <ul className='category__collection-list'>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='/'>
                RED
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='/'>
                WHITE
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='/'>
                BLUE
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='/'>
                BLACK
              </Link>
            </li>
            <li className='category__collection-item'>
              <Link className='category__collection-link' to='/'>
                PINK
              </Link>
            </li>
          </ul>
        </div>
        <div className='category__tag'>
          <h4>POPULAR TAGS</h4>
          <div className='category__tags'>
          <Link to=''>BLACK</Link>
          <Link to=''>BLUE</Link>
          <Link to=''>BROWM</Link>
          <Link to=''>L</Link>
          <Link to=''>M</Link>
          <Link to=''>ML</Link>
          <Link to=''>PINK</Link>
          <Link to=''>SKY</Link>
          <Link to=''>WHITE</Link>
          <Link to=''>X</Link>
          <Link to=''>XL</Link>
          </div>
        </div>
        <div className='category__banner'>
          <Link to=''>
            <img src={banner_left}></img>
          </Link>
        </div>
      </div>
      <div className='promain col c-9 m-12'>
        <div className='promain__banner'>
          <img src={banner_products}></img>
        </div>
        <div className='promain__sort'>
          <h4>Sort by</h4>
          <select>
            <option>Date,old to new</option>
            <option>Date,new to old</option>
            <option>Price,high to low</option>
            <option>Price,low to high</option>
          </select>
        </div>
        <div className='promain__title'>
          {
            <h3>{text}</h3>
          }
            
        </div>
        <div className='row'>
          {
            props.listProduct.map(function(l,index){
            if(products===l.category){
              return <div key={index} className="product col c-4 n-12">
              <Link className='product__img' to="/">
                  <img src={l.image}></img>
              <div className='product__overlay'></div>

              </Link>
              <div className='product__control'>
                  <div className='product__rate'>
                      <div className='product__rate-star'>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                      </div>
                      <span>No review</span>
                  </div>
                  <div className='product__add'>
                      <button onClick={()=>props.addProduct(l)}>ADD TO CART</button>
                      <Link to='/'><i className="fa-solid fa-eye" ></i></Link>
                      <Link to='/'><i className="fa-solid fa-heart" ></i></Link>
                  </div>
              </div>
              <div className='product__detail'>
                  <h5 className="product__name">{l.title}</h5>
                  <span className="product__price">${l.price}</span>
              </div>
          </div> 
              
            }
            else if(products==='A'){
              return <div key={index} className="product col c-4 n-12">
              <Link className='product__img' to="/">
                  <img src={l.image}></img>
              <div className='product__overlay'></div>

              </Link>
              <div className='product__control'>
                  <div className='product__rate'>
                      <div className='product__rate-star'>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                      </div>
                      <span>No review</span>
                  </div>
                  <div className='product__add'>
                      <button onClick={()=>props.addProduct(l)}>ADD TO CART</button>
                      <Link to='/'><i className="fa-solid fa-eye" ></i></Link>
                      <Link to='/'><i className="fa-solid fa-heart" ></i></Link>
                  </div>
              </div>
              <div className='product__detail'>
                  <h5 className="product__name">{l.title}</h5>
                  <span className="product__price">${l.price}</span>
              </div>
          </div> 
              
            }
            
          }
            )
          }     
        </div>
      </div>
    </>
    
  )
}

export default Category