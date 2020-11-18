import React from 'react'
import {useState} from 'react'
import Drug from '../Drug/'
import './DrugList.scss'
const DrugList=()=>{
    const drugs=[
        {id:1, name:'Эргоферон', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'таблетка', price:18,  image:'https://picsum.photos/200'},
        {id:1, name:'Линкас', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'сироп', price:23, image:'https://picsum.photos/201'},
        {id:1, name:'Парацетамол', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'таблетка', price:3, image:'https://picsum.photos/202'}
    ]
  
    return(<>
           {drugs.map(drug=><Drug 
                                id={drug.id} 
                                image={drug.image} 
                                name={drug.name} 
                                description={drug.description} 
                                type={drug.type} 
                                price={drug.price}
                                />)}
           </>
    )
}

export default DrugList