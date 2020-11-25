import React from 'react';
import { NavLink } from "react-router-dom";

import "./index.scss";

const MenuItem = (props) => {
   return (
      <li className="menu__item">
         <NavLink className="menu__linc" exact to={props.link}>
            {props.children}
         </NavLink>
      </li>
   );
}

export default MenuItem;