import React from 'react';



import getSushiSet from "../../instance";
import FoodItem from "../../conponents/FoodItem"

import "./index.scss";



const Sushi = () => {
   const [sushiset, setSushiSet] = React.useState([]);

   React.useEffect(() => {
      getSushiSet
         .get("/SusiSet.json")
         .then(response => {
            setSushiSet(response.data)
         })
   }, []);

   return (
      <div>
         {
            sushiset.map((food) => {
               return (
                  <FoodItem key={food.name} food={food} />
               )
            })
         }
      </div>
   );
}

export default Sushi;