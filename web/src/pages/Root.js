import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cadastro from './Cadastro';
import CheckOut from './CheckOut';
import PetShop from './PetShop';
import Home from './Home';


const PagesRoot = () => {

const quant = [1,2,3,4,5,6,1,34,5,4,58, 9,1,2,3,4,5,6,1,34,5,4,58, 9];

  return (
    <Router>
        <Route path="/" exact >
        < Home quant={quant}/>
        </Route> 

        <Route path="/cadastro">
        <Cadastro />
        </Route>

        <Route path="/checkout">
        <CheckOut/>
        </Route>

        <Route path="/petshop/:id">
        <PetShop quant={quant}/>
          </Route>  

    </Router>
  );
}

export default PagesRoot;