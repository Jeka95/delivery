import React from 'react';
import { Link } from "react-router-dom";


import "./index.scss";
import LogoIcon from "../../assets/logo.png"


const Logo = () => {
   return (
      <Link className="logo" to="/">
         <img className="logo__icon" src={LogoIcon} alt="" />
      </Link>

   );
}

export default Logo;
