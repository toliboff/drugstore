import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './Cart.scss'
import Delete from './delete1.png'

export default function Cart({cart, setCart}) {

    const [goodsPrice, setgoodsPrice]=useState(0);
    const [delivery, setDelivery]=useState(0);
    const [total, setTotal]=useState(0);
    const cityRef=useRef(null)  
    const handleAddCount=(clicked)=>{
      
        setCart(cart.map(a=>a.id===clicked.id?{...a, count:a.count+1}:a));
        
    }
    const handleSubtractCount=(clicked)=>{
        setCart(cart.map(a=>a.id===clicked.id?{...a, count:a.count>1?a.count-1:a.count}:a));
        
    }

    const handleDelete=(clicked)=>{
        setCart(cart.filter(a=>a.id!==clicked.id));
    }

    const handleDelivery=()=>{
        setDelivery(cityRef.current.value)
    }
   useEffect(()=>{

    setgoodsPrice(cart.map(a=>a.price*a.count).reduce((a,b)=>a+b));
   
   },[cart])
   useEffect(()=>{

    setTotal(+goodsPrice+ +delivery);
       
   },[goodsPrice, delivery])
  
    return (
        <div className='cart'>
          <div className='cart-header' >
              <header>
                   <span>Ваш счёт:</span>
                   <span>Добавить</span>
              </header>
          </div>
            {cart.map(product=>
                
                <div className='cart-items' key={product.name}>
                    <img src={Delete} alt="Удалить" className='delete' onClick={()=>handleDelete(product)}/>
                    
                    <section>
                         <img src={product.image} alt=""/>
                         <div className='price-qty'>
                            <div className='price-info'><span className="price">{product.price * product.count}</span><span >смн.</span></div>
                            <div className='product-qty'>
                                        <span onClick={()=>handleSubtractCount(product)}>-</span>
                                        <input type="text" className="count" value={product.count} />
                                        <span onClick={()=>handleAddCount(product)}>+</span>
                            </div>
                         </div>
                    </section>
                
                    <h3>{product.name}</h3>
               
            </div>
            )}
            <div className='destination'>
                <label>Адрес доставки:</label>
                <select name="city"  ref={cityRef} onChange={handleDelivery}>
                    <option value="0"></option>
                    <option value='10'>Мехробод</option>
                    <option value="10">Гулякандоз</option>
                    <option value="10">Гулхона</option>
                    <option value="15">Навбунёд</option>
                    <option value="25">Хитой</option>
                    <option value="25">Дехмой</option>
                </select>
            </div>
            <div className='delivery-and-price'>
                 <div>
                    <label>Стоимость доставки:</label>
                    <input className='delivery' value={delivery}/>
                </div>
                <div>
                    <label>Стоимость товара:</label>
                    <input className='goodsPrice' value={goodsPrice}/>
                </div>  
            </div>
            
            <div className='total'>
                <label>Итого:</label>
                <input value={total}/>
            </div>
            
        </div>
    )
}
