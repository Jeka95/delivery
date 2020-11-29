import React from 'react';

import "./index.scss";


const BasletItem = ({ food }) => {
   return (
      <div className="food-block">
         <img className="food-block__image" src={food.img} alt={food.name} />
         <h4 className="food-block__title">{food.name}</h4>
         <span className="food-block__ingredients">{food.ingredients}</span>
         <div className="food-block__bottom">
            <div className="food-block__price"> {food.price} грн</div>
         </div>
      </div >
   );
}

export default BasletItem;