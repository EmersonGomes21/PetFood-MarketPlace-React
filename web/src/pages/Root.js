import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Cadastro from './Cadastro';
import CheckOut from './CheckOut';
//import Route from '../utils/Route';

const PagesRoot = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Cadastro}/>     
        <Route path="/cadastro"  component={ Cadastro} />
        <Route path="/checkout"  component={ CheckOut} />
             
      </Switch>
    </Router>
  );
}

export default PagesRoot;