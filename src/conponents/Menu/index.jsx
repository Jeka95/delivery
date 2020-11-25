import React, { useState } from 'react';


import "./index.scss";
import MenuItem from "./MenuItem";


const Menu = () => {
   const [menuActive, setMenuActive] = useState(false);
   return (
      <div>
         <div className="burger" onClick={() => setMenuActive(!menuActive)}>
            <span className={menuActive ? "burger__span active" : "burger__span"}></span>
         </div>
         <nav className={menuActive ? "menu active" : "menu"} >
            <ul className="menu__items" onClick={() => setMenuActive(false)}>
               <MenuItem link="/pizza">Піца</MenuItem>
               <MenuItem link="/sushi">Роли</MenuItem>
               <MenuItem link="/sushiset">Суші сети</MenuItem>
               <MenuItem link="/soups">Супи</MenuItem>
               <MenuItem link="/salad">Салати</MenuItem>
               <MenuItem link="/drinks">Напої</MenuItem>
            </ul>
         </nav>
      </div>
   );
}

export default Menu;
