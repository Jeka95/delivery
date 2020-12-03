import React from 'react';

import getPizzas from "../../instance";
import FoodItem from "../../conponents/FoodItem"

import "./index.scss";
const Pizza = () => {

   const [pizzas, setPizzas] = React.useState([]);

   React.useEffect(() => {
      getPizzas
         .get("/pizzas.json")
         .then(response => {
            setPizzas(response.data)
         })
   }, []);

   return (
      <div className="food__items">
         {
            pizzas.map((food) => {
               return (
                  <FoodItem key={food.name} food={food} />
               )
            })
         }
      </div>
   );
}

export default Pizza;

