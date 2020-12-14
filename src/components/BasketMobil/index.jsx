
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import "./index.scss";
import BasketIcon from "../../assets/basket.png"


const BasketIcoMob = (props) => {
   return (
      <Link to="/basket" className="header__basketmob">
         <span className="header__countermob">{props.counter}</span>
         <img src={BasketIcon} alt="" />
         <span className="header__pricemob" >{props.resultPrice} грн</span>
      </Link>

   );
}
const mapStateToProps = (state) => {
   return {
      counter: state.counter,
      resultPrice: state.resultPrice,
   }
}
export default connect(mapStateToProps)(BasketIcoMob);