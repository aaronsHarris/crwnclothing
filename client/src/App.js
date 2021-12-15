import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';

import { Home } from './pages/Home/Home.jsx';
import ShopPage from './pages/Shop/ShopPage';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;