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

function App() {
  const [cart, setCart]=useState();
  return (
    <div className="App">
     <Header cart={cart} setCart={setCart} />
     <Add />
     <Slide />
     <Search />
     <Categories />
     <DrugList />
     <Popular />
    </div>
  );
}

export default App;
