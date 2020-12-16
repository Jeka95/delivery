import React, { useState } from 'react';


import "./index.scss";
import MenuItem from "./MenuItem";
import Basket from "../../components/Basket";
import BasketMobil from "../../components/BasketMobil";

import RoolIcon2 from "../../assets/rool2";
import DrinkIcon2 from "../../assets/drink2";
import SushiSetIcon2 from "../../assets/Set2";
import SoupIcon2 from "../../assets/Soup2";
import SaladIcon2 from "../../assets/salad";
import PizzaIcon2 from "../../assets/pizza2";


const Menu = () => {
   const [menuActive, setMenuActive] = useState(false);
   return (
      <div className="menu-qq">
         <div className="burger" onClick={() => setMenuActive(!menuActive)}>
            <span className={menuActive ? "burger__span active" : "burger__span"}><span className="burger__name"></span></span>
         </div>
         <nav className={menuActive ? "menu active" : "menu"} >
            <ul className="menu__items" onClick={() => setMenuActive(false)}>
               <MenuItem link="/pizza"> <PizzaIcon2 />  <span>Піца</span> </MenuItem>
               <MenuItem link="/sushi"><RoolIcon2 /><span>Роли</span></MenuItem>
               <MenuItem link="/sushiset"><SushiSetIcon2 /> <span>Суші сети</span></MenuItem>
               <MenuItem link="/soup"><SoupIcon2 /> <span>Супи</span> </MenuItem>
               <MenuItem link="/salad"><SaladIcon2 /> <span>Салати</span> </MenuItem>
               <MenuItem link="/drink"> <DrinkIcon2 /> <span>Напої</span> </MenuItem>
               <Basket />
            </ul>
         </nav>
         <BasketMobil />

      </div>
   );
}

export default Menu;
