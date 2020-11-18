import React from 'react'
import {useState} from 'react'
import './Drug.scss'
const Drug=({id, image, name, description, type, price})=>{
   
    const [count, setCount]=useState(1)
    const handleAdd=()=>{
        setCount(prev=>count+1)
    }
    const handleSubtract=()=>{
        setCount(prev=>(count>1)?count-1:1)
    }
    const handleAddToCart=(e)=>{

    }
    return(
            
            <div className='cart'>
                        <img src="https://picsum.photos/200" alt=""/>
                        <h3>{name}</h3>
                        <span className="type">{type}</span>
                        <p>{description}</p>
                        <div className='drug-info'>
                        <span className="price">{price}</span><span className="smn">смн.</span>
                        <div className='qty'>
                            <span onClick={handleSubtract}>-</span>
                            <span className="count">{count}</span>
                            <span onClick={handleAdd}>+</span>
                        </div>
                            <span className='order'  onClick={handleAddToCart}>Заказать</span>
                        </div>
            </div>
       )
}

export default Drug