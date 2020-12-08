import React from 'react';
import { Link } from "react-router-dom";


import "./index.scss";
import LogoIcon from "../../assets/logo.png"


const Logo = () => {
   return (
      <Link to="/">
         <img src={LogoIcon} alt="" />
      </Link>

   );
}

export default Logo;
