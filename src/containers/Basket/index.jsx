import React from 'react';
import { connect } from 'react-redux';


import "./index.scss";
import BasketItem from "../../conponents/BasketItem";
import axiosOrder from "../../instance";


class Basket extends React.Component {


   ToOrderHendler = () => {
      axiosOrder
         .post(`/users/${this.props.ID}/orders.json`, this.props.result);
      console.log(this.props.result);
   }

   GetOrders = () => {
      axiosOrder
         .get(`/users/${this.props.ID}/orders.json`)
         .then(response => {
            for (let prop in response.data) {
               (response.data[prop]).map((elem, index) => {
                  console.log(elem);
                  return (
                     <div key={index}>{elem}</div>)
               })
            }
         })
   }


   render() {
      let result = this.props.result;
      return (
         <div className="basket">
            <div className="basket__input">
               <form action="" className="basket__form">
                  <input type="text" className="basket__name" placeholder="Імя" />
                  <input type="text" className="basket__tel" placeholder="Телефон" />
                  <input type="text" className="basket__city" placeholder="Місто" />
                  <input type="text" className="basket__street" placeholder="Вулиця" />
                  <input type="text" className="basket__house" placeholder="Будинок" />

               </form>
            </div>
            <div>
               <div>Корзина покупок</div>
               {
                  result.map((elem, index) => {
                     return (
                        <div key={index}>
                           <BasketItem food={elem} />
                           <button id={index} onClick={() => { this.props.RemoveFromCard(index, elem.price) }} >Видалити</button>
                        </div>

                     )
                  })
               }
               <button onClick={() => { this.ToOrderHendler() }}>Оформити замовлення</button>
               <button onClick={() => { this.GetOrders() }}>Показати усі замовлення</button>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      result: state.results,
      ID: state.curentUserId
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      RemoveFromCard: (index, price) => dispatch({ type: 'REM_FROM_CARD', payload: { index, price } })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);