import React from 'react'
import './AppDownload.css'
import { assets_frontend } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download'>
        <p>Foor Better Experience <br /> Foody App</p>
        <div className="app-download-platforms">
        <img src={assets_frontend.app_store} alt="" />
        <img src={assets_frontend.play_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload