import { Link } from 'react-router-dom'

import '../sass/contact.scss'
import '../sass/base.scss'

function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='row contact__container'>
                <div className='contact__item col c-4 m-12'>
                    <i className="fa-solid fa-envelope"></i>
                    <span>info@liendobingo.com</span>
                </div>
                <div className='contact__item col c-4 m-12'>
                    <i className="fa-solid fa-phone"></i>
                    <span>(+5555) 224 434</span>
                </div>
                <div className='contact__item col c-4 m-12'>
                    <span>Connect us:</span>
                    <Link to="/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact