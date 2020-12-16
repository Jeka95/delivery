import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import axiosOrder from "../../instance";

import "./index.scss";
import BasketItem from "../../components/BasketItem";

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
         telValid: false,

      };
      this.handleInputChange = this.handleInputChange.bind(this);
   }
   handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
         [name]: value
      })
      if (target.name === "tel") {
         let matrix = "+38(0__)-__-__-___",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = value.replace(/\D/g, "");
         let telVal = value;
         if (def.length >= val.length) val = def;

         telVal = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
         })
         if (telVal.length === 18) {
            this.setState({ telValid: true })
         } else {
            this.setState({ telValid: false })
         }
         this.setState({ [name]: telVal })
      }

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
            </div>
            <div className="basket__total-price">Загальна ціна: {this.props.resultPrice} грн</div>
            <div className="basket__order">
               {this.state.telValid
                  ? <Button variant="contained" color="secondary" onClick={this.ToOrderHendler} >Оформити замовлення</Button>
                  : <Button variant="contained" color="secondary" onClick={this.ToOrderHendler} disabled >Оформити замовлення</Button>
               }</div>
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