import React, { useState } from 'react';


import "./index.scss";
import MenuItem from "./MenuItem";
import PizzaIcon from "../../assets/pizza"
import DrinkIcon from "../../assets/Drink";
import RoolIcon from "../../assets/Rool";
import SoupIcon from '../../assets/Soup';
import SusiSetIcon from '../../assets/SusiSet';
import SaladIcon from '../../assets/salat2';
import Basket from "../../components/Basket"
import BasketMobil from '../BasketMobil';


const Menu = () => {
   const [menuActive, setMenuActive] = useState(false);
   return (
      <div className="menu-qq">
         <div className="burger" onClick={() => setMenuActive(!menuActive)}>
            <span className={menuActive ? "burger__span active" : "burger__span"}><span className="burger__name"></span></span>
         </div>
         <nav className={menuActive ? "menu active" : "menu"} >
            <ul className="menu__items" onClick={() => setMenuActive(false)}>
               <MenuItem link="/pizza"> <PizzaIcon /> Піца </MenuItem>
               <MenuItem link="/sushi"><RoolIcon /> Роли</MenuItem>
               <MenuItem link="/sushiset"><SusiSetIcon /> Суші сети</MenuItem>
               <MenuItem link="/soups"><SoupIcon /> Супи</MenuItem>
               <MenuItem link="/salad"><SaladIcon /> Салати</MenuItem>
               <MenuItem link="/drinks"> <DrinkIcon /> Напої</MenuItem>
               <Basket />
            </ul>
         </nav>
         <BasketMobil />
      </div>
   );
}

export default Menu;
