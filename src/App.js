import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './components/Header/index';
import Slide from './components/Slide/index';
import Search from './components/Search/index';
import Categories from './components/Categories/index';
import Popular from './components/Popular/index';

function App() {
  const [cart, setCart]=useState();
  return (
    <div className="App">
     <Header cart={cart} setCart={setCart} />
     <Slide />
     <Search />
     <Categories />
     <Popular />
    </div>
  );
}

export default App;
