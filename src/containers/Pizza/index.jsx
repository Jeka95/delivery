import React from 'react';

import getPizzas from "../../instance";
import FoodItem from "../../components/FoodItem"

import "./index.scss";
const Pizza = () => {

   const [pizzas, setPizzas] = React.useState([]);

   React.useEffect(() => {
      getPizzas
         .get("/menu.json")
         .then(response => {
            let arr = []
            response.data.map((elem) => {
               if (elem.id == "pizza") {
                  arr.push(elem)
               }
            })
            setPizzas(arr)
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

