import React from 'react'
import './Header.css'
import cartImage from './cart1.png'
import callImage from './phone3.png'
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
                <img src={cartImage} className='icon' alt=""/>
                <sup>0</sup>
            </div>
        </header>
    );
}

export default Header