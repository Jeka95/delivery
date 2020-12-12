import React from 'react';

import "./index.scss";


const BasletItem = ({ food }) => {
   return (
      <div className="basket-block">
         <img className="basket-block__image" src={food.img} alt={food.name} />
         <div className="basket-block__discription">
            <h4 className="basket-block__subtitle">{food.name}</h4>
            <span className="basket-block__weight">{food.weight} грам</span>
         </div>
         <div className="basket-block__bottom">
            <div className="basket-block__price"> {food.price * food.number} грн</div>
            <div className="basket-block__number"> {food.number} шт</div>
         </div>
      </div >
   );
}

export default BasletItem;