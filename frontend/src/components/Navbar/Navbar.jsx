import './Navbar.css'
import { assets_frontend } from '../../assets/frontend_assets/assets';
import { useState } from 'react';
const Navbar = () => {

  const [menu,setMenu] = useState("home");










  return (
    <div className='navbar'>
        <img src={assets_frontend.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==='home'?'active':""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==='menu'?'active':""}>Menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?'active':""}>Mobile-App</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?'active':""}>Contact-Us</li>
        </ul>

        <div className="navbar-right">
          <img src={assets_frontend.search_icon} alt="search" />
          <div className="navbar-search-icon">
            <img src={assets_frontend.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button className='button'>Signin</button>
        </div>
    </div>
  )
}

export default Navbar