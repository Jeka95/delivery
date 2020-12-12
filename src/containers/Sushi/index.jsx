import React from 'react';



import getRool from "../../instance";
import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Sushi = () => {
   const [rools, setRools] = React.useState([]);

   React.useEffect(() => {
      getRool
         .get("/menu.json")
         .then(response => {
            let arr = []
            response.data.map((elem) => {
               if (elem.id == "sushi") {
                  arr.push(elem)
               }
            })
            setRools(arr)
         })
   }, []);

   return (
      <div className="content">
         <div className="title">роли</div>
         <div className="food__items">
            {
               rools.map((food) => {
                  return (
                     <FoodItem key={food.name} food={food} />
                  )
               })
            }
         </div>
      </div>
   );
}

export default Sushi;