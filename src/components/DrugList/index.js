import React from 'react'
import {useState} from 'react'
import Drug from '../Drug/'
import './DrugList.scss'
const DrugList=({cart, setCart, total, setTotal})=>{
    const drugs=[
        {id:1, name:'Эргоферон', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'таблетка', price:18,  image:'https://picsum.photos/200'},
        {id:2, name:'Линкас', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'сироп', price:23, image:'https://picsum.photos/201'},
        {id:3, name:'Парацетамол', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'таблетка', price:3, image:'https://picsum.photos/202'}
    ]
 
    // const [drugs, setDrugs]=useState([]);
    // fetch('http://192.168.1.111:8080/api/v1/getProduct',{
    //     mode: 'cors',
    //     headers: {
    //       'Access-Control-Allow-Origin':'*'
    //     }})
    //     .then(response =>response.json())
    //     .then(data => setDrugs(data))

        // .then(data => console.log(data));
        
  //id, name, type, description, count, price, category, image
    return(<>
           {drugs.map(product=><Drug key={product.id}
                                product={product}
                                cart={cart}
                                setCart={setCart}
                                total={total}
                                setTotal={setTotal}
                                />)}
           </>
    )
}

export default DrugList