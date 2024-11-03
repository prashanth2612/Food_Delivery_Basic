import React, { useContext } from 'react'
import './FoodItem.css'
import { assets_frontend } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/storeContextProvider';
const FoodItem = ({id,name,price,description,image}) => {
  

  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (


    <div className='food-item'>

        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt="" />
            {

              !cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets_frontend.add_icon_white}/>
              :
              <div className='food-item-counter'>

                <img onClick={()=>removeFromCart(id)}src={assets_frontend.remove_icon_red}alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets_frontend.add_icon_green} alt="" />

              </div>
            }
        </div>

        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets_frontend.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem