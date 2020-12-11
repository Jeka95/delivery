import React from 'react';
import { connect } from 'react-redux';


import "./index.scss";

import Like from '../../assets/like';




class FoodItem extends React.Component {

   render() {

      return (
         <div className="food-block">
            <img className="food-block__image" src={this.props.food.img} alt={this.props.food.name} />
            <div className="food-block__info">
               <h4 className="food-block__title">{this.props.food.name}</h4>
               <span className="food-block__weight">{this.props.food.weight} г</span>
               <span className="food-block__ingredients">{this.props.food.ingredients}</span>
            </div>
            <div className="food-block__bottom">
               <div className="food-block__price"> {this.props.food.price} грн</div>
               <button className="food-block__btnAdd" onClick={() => { this.props.AddToCard(this.props.food) }}>Замовити</button>
               <button className={this.props.food.bool ? "food-block__btnLike-active" : "food-block__btnLike"} onClick={() => { this.props.food.bool ? this.props.RemoveFavorite(this.props.food) : this.props.AddFavorite(this.props.food) }}><Like /></button>

            </div>
         </div >
      );
   }
}

const mapStateToProps = (state) => {
   return {

      favorite: state.favorite,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      AddToCard: (obj) => dispatch({ type: 'ADD_TO_CARD', payload: obj }),
      AddFavorite: (obj) => dispatch({ type: 'ADD_TO_FAVORITE', payload: obj }),
      RemoveFavorite: (obj) => dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: obj })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);

