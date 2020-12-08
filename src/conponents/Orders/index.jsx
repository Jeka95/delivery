import React from 'react';

import "./indes.scss";

const Orders = ({ items }) => {
   return (
      <div>
         {
            items.map((elem, index) => {
               return (
                  <div key={index} id={index}>
                     <div>замовлення № {index}</div>
                     <div>Імя замовника:{elem.adress.name}</div>
                     <div>Номер замовника : {elem.adress.tel}</div>
                     <div>Адреса доставки:</div>
                     <div>Місто {elem.adress.city} вулиця {elem.adress.street},будинок {elem.adress.house}</div>
                     <div>Замовлення:</div>
                     <div>{elem.order.map((item, index) => {
                        return (
                           <div key={index}>
                              <span>{item.name}</span>
                              <span>Кількість:{item.number}</span>
                              <span>Ціна {item.price} грн</span>
                           </div>
                        )
                     })}</div>
                     <div>Ціна замовлення:{elem.resulPrice}</div>
                  </div>
               )
            })
         }

      </div>);
}

export default Orders;