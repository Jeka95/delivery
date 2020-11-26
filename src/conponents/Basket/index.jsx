
import React from 'react';
import { Link } from "react-router-dom";

import "./index.scss";
import BasketIcon from "../../assets/basket.png"


const Logo = () => {
   return (
      <Link to="/basket" className="header__basket">
         <img src={BasketIcon} alt="" />
      </Link>

   );
}

export default Logo;