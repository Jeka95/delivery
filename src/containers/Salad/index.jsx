import React from 'react';

import getSalad from "../../instance";
import FoodItem from "../../conponents/FoodItem"

import "./index.scss";
const Salad = () => {

   const [salads, setSalads] = React.useState([]);

   React.useEffect(() => {
      getSalad
         .get("/salads.json")
         .then(response => {
            setSalads(response.data)
         })
   }, []);

   return (
      <div className="food__items">
         {
            salads.map((food) => {
               return (
                  <FoodItem key={food.name} food={food} />
               )
            })
         }
      </div>
   );
}

export default Salad;