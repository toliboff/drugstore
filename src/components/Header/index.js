import React from 'react'
import './Header.scss'
import cartImage from './cart1.png'
import callImage from './phone3.png'
import {Link} from 'react-router-dom'
const Header=({cart})=>{
    return(
        <header>
            <div>
                MENU
            </div>
            <div className='logo'>
                APTEKA LOGO
            </div>
            <div>
                   <a href="tel:92777777"> <img src={callImage} className='icon' alt=""/></a>
            </div>
            <div className='cart-container'>
               <Link to='/cart' className='ll'> 
               <img src={cartImage} className='icon' alt=""/>
                {cart.length>0?<sup>{cart.length}</sup>:null}
                </Link>
            </div>
        </header>
    );
}

export default Header