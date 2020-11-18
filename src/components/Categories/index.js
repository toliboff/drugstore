import React from 'react'
import './Categories.scss'
import prostuda from './prostuda.jpg'
import bol from './bol.jpg'
import deti from './baby.jpg'
import diabet from './asthma.jpg'
import vitamin from './vitamins.jpg'
import catalog from './catalog.jpg'
const Categories=()=>{
    
    const categories=[
        {name:'Простуда и кашель', url:'./prostudy', background:prostuda},
         {name:'Боли и ушибы', url:'./bol', background:bol},
         {name:'Для детей', url:'./deti', background:deti},
         {name:'Астма и диабет', url:'./diabet', background:diabet},
         {name:'Витамины', url:'./vitamin',  background:vitamin},
         {name:'Все лекарства', url:'./catalog', background:catalog},
        ];
       

       
    return(<div>
        {categories.map((cat)=><a href={cat.url}>
                                    <div  className='category' style={{backgroundImage:`url(${cat.background}` }} >
                                       <h2>{cat.name}</h2>
                                            
                                    </div>
                                </a>
        )}
        </div>
    )
}

export default Categories