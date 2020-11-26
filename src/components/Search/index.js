import React from 'react';
import './Search.scss';
import {useEffect, useState} from 'react';
import searchImage from './search1.png';
import SERVER_ADDRESS from '../../server';

const Search=({setFilteredDrugs})=>{
    const [search, setSearch]=useState('')
    
    useEffect(() => {
        if(search===''){
            fetch(SERVER_ADDRESS+':8080/api/v1/getProduct',{
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin':'*'
                }})
                .then(response =>response.json())
                .then(data =>setFilteredDrugs(data));
        }else{
            fetch(SERVER_ADDRESS+':8080/api/v1/getProduct/search/'+search,{
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin':'*'
                }})
                .then(response =>response.json())
                .then(data =>setFilteredDrugs(data));
        }
        
        }, [search]);

       

    const handleSearch=(e)=>{
        
        setSearch(e.target.value)
    }

    return(<>
        <div className='searchbox'>
            <input type="text" onChange={handleSearch} value={search}/>
            <button><img src={searchImage} alt=""/></button>
        </div>
        </>
    )
}

export default Search