import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Drinks from './containers/Drinks';
import Header from "./containers/Header";
import Pizza from './containers/Pizza';
import Salad from './containers/Salad';
import Soups from './containers/Soups';
import Sushi from './containers/Sushi';
import SushiSet from './containers/SushiSet';
import Shares from "./containers/Shares";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Shares} ></Route>
          <Route path="/pizza" component={Pizza}></Route>
          <Route path="/sushi" component={Sushi}></Route>
          <Route path="/sushiset" component={SushiSet}></Route>
          <Route path="/soups" component={Soups}></Route>
          <Route path="/salad" component={Salad}></Route>
          <Route path="/drinks" component={Drinks}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
