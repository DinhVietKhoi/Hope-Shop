import { Link } from "react-router-dom"
import '../sass/footer.scss'
import footersig from '../assets/footer_subcribe.png'
import payment from '../assets/visa.png'
import '../sass/base.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__tittle">
          <h4>Newsletter</h4>
          <span>Get the latest new and special offers</span>
          <div className="footer__subcribe">
            <input type='email' placeholder="email@exmaple.com"></input>
            <button> 
              <p>SIGN UP</p>
              <img src={footersig} alt="sig"></img>
              </button>
          </div>
        </div>
        <div className="row footer__middle">
          <div className="footer__account c-3 l-6 m-12">
            <ul className="footer__list">
              <span>MY ACCOUNT</span>
              <li className="footer__item">
                <Link className="footer__link " to="/">My Account</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Cart</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">Checkout</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Wishlist</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">Login</Link>
              </li>
            </ul>
          </div>

          <div className="footer__information c-3 l-6 m-12">
            <ul className="footer__list">
              <span>INFORMATION</span>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Account</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Cart</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">Checkout</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Wishlist</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">Login</Link>
              </li>
            </ul>
          </div>

          <div className="footer__service c-3 l-6 m-12">
            <ul className="footer__list">
              <span>CUSTOMER SERVICE</span>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Account</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Cart</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">Checkout</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">My Wishlist</Link>
              </li>
              <li className="footer__item">
                <Link className="footer__link" to="/">Login</Link>
              </li>
            </ul>
          </div>

          <div className="footer__store c-3 l-6 m-12">    
            <ul className="footer__list">
              <span>STORE INFORMATION</span>
              <li className="footer__item">
                My Company: 42 avenue des Champs Elysées 123 Paris France
              </li>
              <li className="footer__item">
                Call us now:(+1)866-540-3229
              </li>
              <li className="footer__item">
                Email: admin@bootexperts.com
              </li>
              
            </ul>
          </div>
        </div>
        <div className="footer__contact">
          <div className='footer__contact-cpr'>
            <h5>Copyright<span>©BootExperts</span>.All Rights Reserved</h5>
            <Link className="footer__contact-payment" to="/">
              <img src={payment}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer