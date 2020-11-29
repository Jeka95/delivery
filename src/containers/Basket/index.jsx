import React from 'react';
import { connect } from 'react-redux';

import "./index.scss";
import BasketItem from "../../conponents/BasketItem";


class Basket extends React.Component {


   ToOrderHendler = () => {
      console.log(this.props.result);
   }


   render() {
      let result = this.props.result;
      return (
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
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      result: state.results
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      RemoveFromCard: (index, price) => dispatch({ type: 'REM_FROM_CARD', payload: { index, price } })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);