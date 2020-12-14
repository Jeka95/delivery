import React from 'react';
import { connect } from 'react-redux';

import FoodItem from "../../components/FoodItem"

import "./index.scss";
const Pizza = (props) => {

   const [pizzas, setPizzas] = React.useState([]);

   React.useEffect(() => {
      let arr = [];
      props.items.map((elem) => {
         if (elem.id === "pizza") {
            return arr.push(elem)
         }
         return arr
      })
      setPizzas(arr)
   }, [props.items]);

   return (
      <div className="content">
         <div className="title">піца</div>
         <div className="food__items">
            {
               pizzas.map((food) => {
                  return (
                     <FoodItem key={food.name} food={food} />
                  )
               })
            }
         </div>
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      items: state.itemsServer,
   }
}


export default connect(mapStateToProps)(Pizza);

