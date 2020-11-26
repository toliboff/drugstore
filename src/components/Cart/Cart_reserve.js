import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './Cart.scss'
import Delete from './delete1.png'
import SERVER_ADDRESS from '../../server';
export default function Cart({cart, setCart}) {

    const [goodsPrice, setgoodsPrice]=useState(0);
    const [delivery, setDelivery]=useState(0);
    const [total, setTotal]=useState(0);
    const cityRef=useRef(null);
    const clientNameRef=useRef(null);
    const clientAddressRef=useRef(null);
    const phoneRef=useRef(null);

    const order={};  
    const handleAddCount=(clicked)=>{
      
        setCart(cart.map(a=>a.productId===clicked.productId?{...a, count:a.count+1}:a));
        
    }
    const handleSubtractCount=(clicked)=>{
        setCart(cart.map(a=>a.productId===clicked.productId?{...a, count:a.count>1?a.count-1:a.count}:a));
        
    }

    const handleDelete=(clicked)=>{
        setCart(cart.filter(a=>a.productId!==clicked.productId));
    }

    const handleDelivery=()=>{
        setDelivery(cityRef.current.value)
    }
  
    useEffect(()=>{
        setgoodsPrice(cart.map(a=>a.price*a.count).reduce((a,b)=>a+b,0));
      },[cart])
   
   useEffect(()=>{

   setTotal(+goodsPrice+ 8);
       
   },[goodsPrice, delivery]);

   const handleNewOrder=(obj)=>{
            let drug=[];
            obj.userAddress=cityRef.current.value+', '+clientAddressRef.current.value;
            obj.userNumber=phoneRef.current.value;
            obj.userName=clientNameRef.current.value;
            
              for(let dr of cart){
                    drug.push({productId:dr.productId, count:dr.count})
            }
            obj.products=drug;
        // console.log(obj);
        
        fetch('http://192.168.1.106:8080/api/v1/order', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                 },
            body: JSON.stringify(obj)
                }).then(res=>res.json())
                .then(res => console.log(res));
   }  

    return (
        <div className='cart'>
          <div className='cart-header' >
              <header>
                   <span>Ваш счёт:</span>
                   <span>Добавить</span>
              </header>
          </div>
            {cart.map(product=>
                
                <div className='cart-items' key={product.productId}>
                    <img src={Delete} alt="Удалить" className='delete' onClick={()=>handleDelete(product)}/>
                    
                    <section>
                         <img src={SERVER_ADDRESS+'/aptek.tj/'+product.image} alt=""/>
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
                <label>Регион доставки:</label>
                <select name="city"  ref={cityRef} onChange={handleDelivery}>
                    <option value=""></option>
                    <option value='Мехробод'>Мехробод</option>
                    <option value="Гулякандоз">Гулякандоз</option>
                    <option value="Гулхона">Гулхона</option>
                    <option value="Навбунёд">Навбунёд</option>
                    <option value="Хитой">Хитой</option>
                    <option value="Дехмой">Дехмой</option>
                </select>
            </div>
            <div className='delivery-and-price'>
                 <div>
                    <label>Стоимость доставки:</label>
                    <input className='delivery' value={delivery}/>
                </div>
                <div>
                    <label>Стоимость товара:</label>
                    <input className='goodsPrice' value={goodsPrice.toFixed(2)}/>
                </div>  
            </div>
            
            <div className='total'>
                <label>Итого:</label>
                <input value={total.toFixed(2)}/>
            </div>
            <div className='submit'>
                <h3>Ваши данные</h3>
                <input placeholder='Ваше имя' ref={clientNameRef}/>
                <input placeholder='Адрес доставки' ref={clientAddressRef} autoComplete='off'/>
                <input placeholder='Номер телефона' ref={phoneRef}/>
                <button onClick={()=>handleNewOrder(order)}>Оформить заказ</button>
            </div>
        </div>
    )
}
