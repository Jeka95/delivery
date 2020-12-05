import React from 'react';
import { connect } from 'react-redux';


import "./index.scss";
import BasketItem from "../../conponents/BasketItem";
import axiosOrder from "../../instance";


class Basket extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         tel: "",
         city: "",
         street: "",
         house: "",
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


      console.log(this.props.result);

      console.log(orderResult);
   }

   GetOrders = () => {
      axiosOrder
         .get(`/users/${this.props.ID}/orders.json`)
         .then(response => {
            console.log(response.data);
         })
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
                  <button onClick={() => { this.GetOrders() }}>Показати усі замовлення</button>
               </div>
               <div className="basket__items">
                  {this.props.result.map((elem, index) => {
                     return (
                        <div key={index} className="basket__item">
                           <BasketItem food={elem} />
                           <button id={index} onClick={() => { this.props.RemoveFromCard(index, elem.price) }} >Х</button>
                        </div>
                     )
                  })
                  }
               </div>
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
      RemoveFromCard: (index, price) => dispatch({ type: 'REM_FROM_CARD', payload: { index, price } }),
      PostOrder: () => dispatch({ type: "POST_ORDER", payload: [] })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);