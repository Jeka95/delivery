import React from 'react';
import { connect } from 'react-redux';

import FoodItem from "../../components/FoodItem"

import "./index.scss";
const Salad = (props) => {

   const [salads, setSalads] = React.useState([]);

   React.useEffect(() => {

      let arr = []
      props.items.map((elem) => {
         if (elem.id === "salad") {
            return arr.push(elem)
         }
         return arr
      })
      setSalads(arr)
   }, [props.items]);

   return (
      <div className="content">
         <div className="title">салати</div>
         <div className="food__items">
            {
               salads.map((food) => {
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
      items: state.items,
   }
}

export default connect(mapStateToProps)(Salad);