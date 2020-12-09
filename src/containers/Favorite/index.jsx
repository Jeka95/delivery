import React from 'react';
import { connect } from 'react-redux';

import "./index.scss";
import getFavorite from "../../instance";
import FoodItem from "../../components/FoodItem";

const Favorite = () => {
   const [favorite, setFavorite] = React.useState([]);

   React.useEffect(() => {
      getFavorite
         .get("/menu.json")
         .then(response => {
            console.log(response.data);
            setFavorite(response.data)
         })
   }, []);

   return (
      <div className="content">
         <div>Улюблене</div>
         <div className="food__items">
            {
               favorite.map((food) => {
                  return (
                     <FoodItem key={food.name} food={food} />
                  )
               })
            }
         </div>
      </div>
   );
}
export default Favorite;