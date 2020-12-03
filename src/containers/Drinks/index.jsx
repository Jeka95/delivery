import React from 'react';



import getDrinks from "../../instance";
import FoodItem from "../../conponents/FoodItem"

import "./index.scss";



const Drinks = () => {
   const [drinks, setDrinks] = React.useState([]);

   React.useEffect(() => {
      getDrinks
         .get("/drinks.json")
         .then(response => {
            setDrinks(response.data)
         })
   }, []);

   return (
      <div className="food__items">
         {
            drinks.map((food) => {
               return (
                  <FoodItem key={food.name} food={food} />
               )
            })
         }
      </div>
   );
}

export default Drinks;