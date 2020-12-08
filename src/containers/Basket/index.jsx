import React from 'react';
import { connect } from 'react-redux';


import "./index.scss";
import BasketItem from "../../conponents/BasketItem";
import axiosOrder from "../../instance";
import Orders from '../../conponents/Orders';


class Basket extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         name: "",
         tel: "",
         city: "",
         street: "",
         house: "",
         showOrders: false,
      };
      this.handleInputChange = this.handleInputChange.bind(this);
   }
   handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
         [name]: value
      });
   }

   ShowOrders = () => {
      let arr = []
      axiosOrder
         .get(`/users/${this.props.ID}/orders.json`)
         .then(response => {
            for (let key in response.data) {
               arr.push(response.data[key]);
               console.log(response.data[key]);

            }
            this.setState({
               items: arr
            })
         })
      this.setState({
         showOrders: !this.state.showOrders
      })
   }

   ToOrderHendler = () => {
      let orderResult = {
         order: this.props.result,
         adress: this.state,
         resulPrice: this.props.resultPrice
      }
      axiosOrder
         .post(`/users/${this.props.ID}/orders.json`, orderResult);

      this.setState({
         name: "",
         tel: "",
         city: "",
         street: "",
         house: "",
      });
      this.props.PostOrder();
   }

   render() {

      return (
         <div>
            <div className="basket__title">Корзина покупок</div>
            <div className="basket">

               <div className="basket__input">
                  <form action="" className="basket__form">
                     <input name="name" type="text" className="basket__name input" placeholder="Імя" onChange={this.handleInputChange} value={this.state.name} />
                     <input name="tel" type="text" className="basket__tel input" placeholder="Телефон*" onChange={this.handleInputChange} value={this.state.tel} />
                     <input name="city" type="text" className="basket__city input" placeholder="Місто" onChange={this.handleInputChange} value={this.state.city} />
                     <input name="street" type="text" className="basket__street input" placeholder="Вулиця" onChange={this.handleInputChange} value={this.state.street} />
                     <input name="house" type="text" className="basket__house input" placeholder="Будинок" onChange={this.handleInputChange} value={this.state.house} />
                  </form>
                  <button onClick={this.ToOrderHendler}>Оформити замовлення</button>
                  <button onClick={this.ShowOrders}>Показати усі замовлення</button>
                  {this.state.showOrders ? <Orders items={this.state.items} /> : null}
               </div>
               <div className="basket__items">
                  {console.log(this.props.result)}
                  {this.props.result.map((elem, index) => {
                     return (
                        <div key={index} className="basket__item">
                           <BasketItem food={elem} />
                           <button id={index} onClick={() => { this.props.RemoveFromCard(index, elem.price, elem.number) }} >Х</button>
                        </div>
                     )
                  })
                  }
               </div>
               <div className="basket__total-price">Загальна ціна: {this.props.resultPrice}</div>
            </div>
         </div >
      );
   }
}

const mapStateToProps = (state) => {
   return {
      result: state.results,
      ID: state.curentUserId,
      resultPrice: state.resultPrice,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      RemoveFromCard: (index, price, number) => dispatch({ type: 'REM_FROM_CARD', payload: { index, price, number } }),
      PostOrder: () => dispatch({ type: "POST_ORDER", payload: [] })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);