import React from 'react';
import "./index.scss";
import LogoIcon from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <Link exact to="/">
         <img src={LogoIcon} alt="" />
      </Link>

   );
}

export default Logo;
