import React from 'react';
import { NavLink } from "react-router-dom";

import "./index.scss";

const InfoItem = (props) => {
   return (
      <li className="info__item">
         <NavLink className="info__linc" exact to={props.link}>
            {props.children}
         </NavLink>
      </li>
   );
}

export default InfoItem;