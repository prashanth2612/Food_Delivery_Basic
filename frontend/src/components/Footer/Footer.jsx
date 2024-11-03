import React from 'react'
import './Footer.css'
import { assets_frontend } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">

            <img className="logo" src={assets_frontend.logo}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente est nostrum. Assumenda beatae quasi, veniam reprehenderit pariatur, ab nostrum, labore natus amet asperiores facere laudantium blanditiis autem quisquam corporis!</p>
                    <div className='footer-social-icons'>
                        <img src={assets_frontend.facebook_icon} alt="" />
                        <img src={assets_frontend.twitter_icon} alt="" />
                        <img src={assets_frontend.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                   
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>8074801486</li>
                    <li>prashanthit8074@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright @ foofo.com - All Rights are Reserved</p>
    </div>
  )
}

export default Footer