import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from the diverse menu and enjoy the meal</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All" : item.menu_name)} key={index} className='explore-menu-list-items'>

                            <img className={category===item.menu_name ? "active":""} src={item.menu_image}/>
                            <p>{item.menu_name}</p>

                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMenu