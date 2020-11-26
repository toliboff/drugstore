import React from 'react'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Main from './Main';
import Slide from './components/Slide';
import Search from './components/Search';
import Categories from './components/Categories';
import Popular from './components/Popular';
import DrugList from './components/DrugList';
import Add from './components/Add/Add';
import Cart from './components/Cart';
import SERVER_ADDRESS from './server'

function App() {
  const [cart, setCart]=useState([]);
  const [total, setTotal]=useState(0);
  const [drugs, setDrugs]=useState([]);
  const [filteredDrugs, setFilteredDrugs]=useState([]);

  useEffect(() => {
    fetch(SERVER_ADDRESS+':8080/api/v1/getProduct',{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }})
        .then(response =>response.json())
        .then(data => {setDrugs(data); setFilteredDrugs(data)});
    }, [])
  //   const drugs=[
  //     {productId:1, name:'Эргоферон', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'таблетка', price:18,  image:'https://picsum.photos/200'},
  //     {productId:2, name:'Линкас', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'сироп', price:23, image:'https://picsum.photos/201'},
  //     {productId:3, name:'Парацетамол', description:'бла бла бла бла бла бла бал абл абла аблта бла', type:'таблетка', price:3, image:'https://picsum.photos/202'}
  // ]
    
  return (
    
    <div className="App">
    <Router >
      <Header cart={cart} setCart={setCart} />
     
       <Link to='/druglist'>DrugsList</Link>
       <Link to='/cart'>Cart</Link>
       <Link to='/search'>Search</Link>
       <Switch>
        <Route exact path='/'> <Categories /></Route> 
        <Route path='/druglist'><DrugList drugs={filteredDrugs} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/></Route> 
        <Route path='/cart'><Cart cart={cart} setCart={setCart}/></Route> 
        <Route path='/search'><Search filteredDrugs={filteredDrugs} setFilteredDrugs={setFilteredDrugs}/><DrugList drugs={filteredDrugs} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/></Route> 
        {/* <Route exact path='/'><DrugList drugs={drugs} cart={cart} setCart={setCart} total={total} setTotal={setTotal} /></Route>  */}
        {/* <Route path='/cart' component={<Cart cart={cart} setCart={setCart}/>} /> */}
      </Switch>
        {/* <Main /> */}
        
        
        {/* {cart.length>0?<Cart cart={cart} setCart={setCart}/>:null} */}
        {/* <Add /> */}
        {/* <Slide /> */}
        {/* <Search /> */}
        {/* <Categories /> */}
        {/* <DrugList drugs={druggs} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/> */}
        {/* <Popular /> */}
     </Router>
    </div>
    
  );
}

export default App;
