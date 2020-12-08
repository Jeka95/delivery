import React from 'react';



import getDrinks from "../../instance";
import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Drinks = () => {
   const [drinks, setDrinks] = React.useState([]);

   React.useEffect(() => {
      getDrinks
         .get("/menu.json")
         .then(response => {
            let arr = []
            response.data.map((elem) => {
               if (elem.id == "drink") {
                  arr.push(elem)
               }
            })
            setDrinks(arr)
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