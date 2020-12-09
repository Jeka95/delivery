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
import About from "./containers/About";
import Contacts from "./containers/Contacts";
import HowOrder from "./containers/HowOrder";
import Certificate from "./containers/Certificate";
import Basket from "./containers/Basket";
import Footer from './containers/Footer';





function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Header />
          <Switch >
            <Route path="/" exact component={Shares} ></Route>
            <Route path="/pizza" component={Pizza}></Route>
            <Route path="/sushi" component={Sushi}></Route>
            <Route path="/sushiset" component={SushiSet}></Route>
            <Route path="/soups" component={Soups}></Route>
            <Route path="/salad" component={Salad}></Route>
            <Route path="/drinks" component={Drinks}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contacts" component={Contacts}></Route>
            <Route path="/howtoorder" component={HowOrder}></Route>
            <Route path="/certificate" component={Certificate}></Route>
            <Route path="/basket" component={Basket}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
