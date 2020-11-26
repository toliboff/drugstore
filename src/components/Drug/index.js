import React from 'react'
import {useState} from 'react'
import './Drug.scss'
import SERVER_ADDRESS from '../../server';
const Drug=({product, cart, setCart})=>{
   
    const [count, setCount]=useState(1)
    const handleAdd=()=>{
        setCount(prev=>count+1)
    }
    const handleSubtract=()=>{
        setCount(prev=>(count>1)?count-1:1)
    }
    const handleAddToCart=(newProduct, count)=>{
        if(cart.some(a=>a.productId===newProduct.productId)){
            setCart(cart.map(a=>a.productId===newProduct.productId?{...a, count:a.count+count}:a));
        }
        else{
            setCart([...cart, {...newProduct, count:count}]);
        }
    }
   
    return(
            <div className='product' key={product.name}>
                <img src={SERVER_ADDRESS+'/aptek.tj/'+product.image} alt=""/>
                <h3>{product.name}</h3>
                <span className="type">{product.type}</span>
                <p>{product.description}</p>
                <div className='drug-info'>
                    <span className="price">{product.price}</span><span className="smn">смн.</span>
                    <div className='qty'>
                        <span onClick={handleSubtract}>-</span>
                        <input type="text" className="count" value={count} />
                        <span onClick={handleAdd}>+</span>
                    </div>
                    <span className='order'  onClick={()=>handleAddToCart(product, count)}>Заказать</span>
                </div>
            </div>
       )
}

export default Drug