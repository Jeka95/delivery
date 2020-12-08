import React from 'react';



import getSushiSet from "../../instance";
import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Sushi = () => {
   const [sushiset, setSushiSet] = React.useState([]);

   React.useEffect(() => {
      getSushiSet
         .get("/menu.json")
         .then(response => {
            let arr = []
            response.data.map((elem) => {
               if (elem.id == "sushiset") {
                  arr.push(elem)
               }
            })
            setSushiSet(arr)
         })
   }, []);

   return (
      <div className="food__items">
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