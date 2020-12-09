import React from 'react';

import getSalad from "../../instance";
import FoodItem from "../../components/FoodItem"

import "./index.scss";
const Salad = () => {

   const [salads, setSalads] = React.useState([]);

   React.useEffect(() => {
      getSalad
         .get("/menu.json")
         .then(response => {
            let arr = []
            response.data.map((elem) => {
               if (elem.id == "salad") {
                  arr.push(elem)
               }
            })
            setSalads(arr)
         })
   }, []);

   return (
      <div className="content">
         <div className="food__items">
            {
               salads.map((food) => {
                  return (
                     <FoodItem key={food.name} food={food} />
                  )
               })
            }
         </div>
      </div>
   );
}

export default Salad;