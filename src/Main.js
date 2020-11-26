import React from 'react'
import {Switch, Route} from 'react-dom'
import Slide from './components/Slide'
import DrugList from './components/DrugList'
import Cart from './components/Cart'

function Main() {
    return (
        <main>
            {/* <Switch>
                <Route exact path='/' component={Slide} />
                <Route path='/druglist' component={DrugList} />
                <Route path='/cart' component={Cart} />
            </Switch> */}
        </main>
    )
}

export default Main
