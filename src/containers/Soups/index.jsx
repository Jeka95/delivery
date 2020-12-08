import React from 'react';



import getSoup from "../../instance";
import FoodItem from "../../conponents/FoodItem"

import "./index.scss";



const Soups = () => {
   const [soups, setSoups] = React.useState([]);

   React.useEffect(() => {
      getSoup
         .get("/soups.json")
         .then(response => {
            let arr = []
            response.data.map((elem) => {
               if (elem.id == "soup") {
                  arr.push(elem)
               }
            })
            setSoups(arr)
         })
   }, []);

   return (
      <div className="food__items">
         {
            soups.map((food) => {
               return (
                  <FoodItem key={food.name} food={food} />
               )
            })
         }
      </div>
   );
}

export default Soups;