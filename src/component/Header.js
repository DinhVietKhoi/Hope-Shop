import { useRef } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import '../sass/base.scss'
import '../sass/header.scss'

function Header() {
  const navBar = useRef(null); 
  let checked = true;
  const handleMenu= ()=>{
    if(checked === true){
      navBar.current.classList.add('active');
    }
    else{
      navBar.current.classList.remove('active');

    }
    checked= !checked;
  }
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__above'>
          <div className='header__left'>
            <div className='header__search'>
              <input className='header__input' placeholder='Search our store'></input>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className='header__middle'>
            <Link to="/"> <img src={logo} alt='logo'></img></Link>
          </div>
          <div className='header__right'>
            <ul className='header__right-list'>
              <li className='header__right-item header__right-account'>
                <Link className='header__right-link' to="/Account"><i className="fa-solid fa-key"></i> Account</Link>
                <div className='header__account'>
                  <span>SETTING</span>
                  <ul>
                    <li>
                      <Link to='/Account'>
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link to='/Cart'>
                        My Cart
                      </Link>
                    </li>
                    <li>
                      <Link to='/Blog'>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to='/Whishlist'>
                        My Whishlist
                      </Link>
                    </li>
                    <li>
                      <Link to='/Login'>
                        My Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='header__right-item header__right-cart'>
                <Link className='header__right-link' to="/Cart"><i className="fa-solid fa-cart-shopping"></i>Shopping Cart</Link>
              <div className='header__cart'>
                <span>Your cart currently empty</span>
                <button>CHECKOUT</button>
              </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='header__below'>
          <div className='header__navbar'>
            <ul className='header__navbar-list'>
              <li className='header__navbar-item'>
                <Link className='header__navbar-link' to="/">Home</Link>
              </li>
              <li className='header__navbar-item'>
                <Link className='header__navbar-link' to="/a">Product</Link>
              </li>
              <li className='header__navbar-item'>
                <Link className='header__navbar-link' to="/">Blog</Link>
              </li>
              <li className='header__navbar-item'>
                <Link className='header__navbar-link' to="/">Contact</Link>
              </li>
              <li className='header__navbar-item'>
                <Link className='header__navbar-link' to="/">About Us</Link>
              </li>
              <li className='header__navbar-item'>
                <Link className='header__navbar-link' to="/">404</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className='menu'>
        <div className='container'>
          <div className='menu__container'>
            <div className='menu-icon'>
              <span>MENU</span>
              <i className="fa-solid fa-bars" onClick={handleMenu}></i>
            </div>
            <div className='menu__navbar' >
              <div className='menu__control'>
                <ul className='menu__list' ref={navBar}>
                  <li className='menu__item'>
                    <Link className='menu__link' to='/'>
                      Home
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link className='menu__link' to='/'>
                      Product
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link className='menu__link' to='/'>
                      Blog
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link className='menu__link' to='/'>
                      Contact
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link className='menu__link' to='/'>
                      About Us
                    </Link>
                  </li>
                  <li className='menu__item'>
                    <Link className='menu__link' to='/'>
                      404
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header