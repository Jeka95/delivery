import React from 'react';
import { Link } from "react-router-dom";

import "./index.scss";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__name">2020 React Delivery</div>
         <div className="footer__lincs">
            <Link to="/contacts" className="footer__linc" >Контакти</Link>
            <Link to="/about" className="footer__linc" >Про нас</Link>
            <Link to="/howtoorder" className="footer__linc" >Як замовити</Link>

         </div>
      </footer>
   );
}

export default Footer;