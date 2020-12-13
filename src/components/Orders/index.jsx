import React from 'react';
import LogoOrder from "../../assets/logoorders.png";
import "./indes.scss";

const Orders = ({ items }) => {
   return (
      <div className="order">
         {
            items.map((elem, index) => {
               return (
                  <div className="order__item" key={index} id={index}>
                     <img className="order__img" src={LogoOrder} alt="" />
                     <div className="order__number">Замовлення № {elem.numberorder}</div>
                     <div className="order__name">Ім'я: {elem.adress.name}</div>
                     <div className="order__tel">Номер: {elem.adress.tel}</div>
                     <div className="order__adress">Адреса доставки:</div>
                     <div className="order__curadd" >Місто {elem.adress.city},<br /> вулиця {elem.adress.street},<br />будинок {elem.adress.house}</div>
                     <div className="order__orders" >Замовлення:</div>
                     <div className="order__ordersitems">{elem.order.map((item, index) => {
                        return (
                           <div className="order__orderitem" key={index}>
                              <span>{item.name}  </span>
                              <span> Кількість:{item.number}</span>
                              <span> Ціна {item.price} грн</span>
                           </div>
                        )
                     })}</div>
                     <div className="order__price">
                        <span> До оплати:</span>
                        <span>{elem.resulPrice} грн</span>
                     </div>
                  </div>
               )
            })
         }

      </div>);
}

export default Orders;