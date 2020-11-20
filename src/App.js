import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import Search from './components/Search';
import Categories from './components/Categories';
import Popular from './components/Popular';
import DrugList from './components/DrugList';
import Add from './components/Add/Add';
import Cart from './components/Cart';

function App() {
  const [cart, setCart]=useState([]);
  const [total, setTotal]=useState(0)
  return (
    <div className="App">
    
     <Header cart={cart} setCart={setCart} />
     {cart.length>0?<Cart cart={cart} setCart={setCart}/>:null}
     <Add />
     {/* <Slide /> */}
     <Search />
     <Categories />
     <DrugList cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
     <Popular />
     
    </div>
  );
}

export default App;
