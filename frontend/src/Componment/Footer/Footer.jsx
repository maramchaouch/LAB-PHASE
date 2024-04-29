import React from 'react'
import './Footer.css'
import logos from '../Assets/logos.jpg' 
import insta from '../Assets/insta.png'
import fb from '../Assets/fb.jpg'
import whats from '../Assets/whats.jpg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logos} alt="" />
        <p>Glamorous Crest</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta} alt="" />
           </div>
           <div className="footer-icons-container">
            <img src={fb} alt="" />
           </div>
           <div className="footer-icons-container">
            <img src={whats} alt="" />
           </div>
      </div>
    <div className="footer_copyright">
        <hr/>
        <p>Copyright @2024  -  All Rights Reserved</p>
   
    </div>
    </div>
  )
}

export default Footer
