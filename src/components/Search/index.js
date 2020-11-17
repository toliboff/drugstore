import React from 'react'
import './Search.scss'
import searchImage from './search1.png'
const Search=()=>{
    return(<>
        <div className='searchbox'>
            <input type="text" />
            <button><img src={searchImage} alt=""/></button>
        </div>
        </>
    )
}

export default Search