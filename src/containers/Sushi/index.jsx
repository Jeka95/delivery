import React from 'react';



import getRool from "../../instance";
import FoodItem from "../../conponents/FoodItem"

import "./index.scss";



const Sushi = () => {
   const [rools, setRools] = React.useState([]);

   React.useEffect(() => {
      getRool
         .get("/rools.json")
         .then(response => {
            setRools(response.data)
         })
   }, []);

   return (
      <div className="food__items">
         {
            rools.map((food) => {
               return (
                  <FoodItem key={food.name} food={food} />
               )
            })
         }
      </div>
   );
}

export default Sushi;