import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


import "./index.scss";
import BasketItem from "../../components/BasketItem";
import axiosOrder from "../../instance";
import Orders from '../../components/Orders';


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
         resulPrice: this.props.resultPrice,
         numberorder: Date.now()
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
         <div className="content">
            <div className="title">Корзина покупок</div>
            <div className="basket">
               <div className="basket__input">
                  <form action="" className="basket__form">
                     <input name="name" type="text" className="basket__name input" placeholder="Імя" onChange={this.handleInputChange} value={this.state.name} />
                     <input name="tel" type="text" className="basket__tel input" placeholder="Телефон*" onChange={this.handleInputChange} value={this.state.tel} />
                     <input name="city" type="text" className="basket__city input" placeholder="Місто" onChange={this.handleInputChange} value={this.state.city} />
                     <input name="street" type="text" className="basket__street input" placeholder="Вулиця" onChange={this.handleInputChange} value={this.state.street} />
                     <input name="house" type="text" className="basket__house input" placeholder="Будинок" onChange={this.handleInputChange} value={this.state.house} />
                  </form>

               </div>
               <div className="basket__items">
                  {this.props.result.map((elem, index) => {
                     return (
                        <div key={index} className="basket__item">
                           <BasketItem food={elem} />
                           <button className="basket__btn-minus" onClick={() => { this.props.RemItem(elem, index) }}>l</button>
                           <button className="basket__btn-plus" onClick={() => { this.props.AddItem(elem, index) }}>х</button>
                           <button className="btn-remove-basket" id={index} onClick={() => { this.props.RemoveFromCard(index, elem.price, elem.number) }} ><span className="cl-btn"></span></button>
                        </div>

                     )
                  })
                  }
               </div>
               <div className="basket__total-price">Загальна ціна: {this.props.resultPrice} грн</div>
            </div>
            <div className="basket__order">
               <Button variant="contained" color="secondary" onClick={this.ToOrderHendler}>Оформити замовлення</Button>
               <Button variant="contained" color="secondary" onClick={this.ShowOrders}>Показати усі замовлення</Button>
            </div>
            {this.state.showOrders ? <Orders items={this.state.items} /> : null}
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
      PostOrder: () => dispatch({ type: "POST_ORDER", payload: [] }),
      AddItem: (elem, index) => dispatch({ type: 'ADD_ITEM', payload: elem }),
      RemItem: (elem, index) => dispatch({ type: 'REM_ITEM', payload: { elem, index } }),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);