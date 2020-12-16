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
// import Certificate from "./containers/Certificate";
import Basket from "./containers/Basket";
import Footer from './containers/Footer';
import Favorite from './containers/Favorite';
import Menu from './components/Menu';
import FoodItemPage from "./containers/FoodItemPage";
import PersonalInfo from "./containers/PersonalOffice";
import NotFound from "./containers/NotFound";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Menu />
          <Switch  >
            <Route path="/" exact component={Shares} ></Route>
            <Route path="/pizza" exact component={Pizza}></Route>
            <Route path="/sushi" exact component={Sushi}></Route>
            <Route path="/sushiset" exact component={SushiSet}></Route>
            <Route path="/soup" exact component={Soups}></Route>
            <Route path="/salad" exact component={Salad}></Route>
            <Route path="/drink" exact component={Drinks}></Route>
            <Route path="/favorite" component={Favorite}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contacts" component={Contacts}></Route>
            <Route path="/howtoorder" component={HowOrder}></Route>
            {/* <Route path="/certificate" component={Certificate}></Route> */}
            <Route path="/basket" component={Basket}></Route>
            <Route path="/personal-info" component={PersonalInfo}></Route>
            <Route path="/:id/:id" component={FoodItemPage}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
