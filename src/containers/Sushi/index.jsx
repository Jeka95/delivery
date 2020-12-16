import React from 'react';
import { connect } from 'react-redux';

import getItem from "../../instance";

import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Sushi = (props) => {
   const [rools, setRools] = React.useState([]);

   React.useEffect(() => {

      let arr = []
      if (props.items.length === 0) {
         getItem
            .get("/menu.json")
            .then(response => {
               props.GetItems(response.data);
               response.data.map((elem) => {
                  if (elem.id === "sush") {
                     return arr.push(elem)
                  }
                  return arr
               })
            })
      } else {
         props.items.map((elem) => {
            if (elem.id === "sushi") {
               return arr.push(elem)
            }
            return arr
         })
         setRools(arr)
      }
   }, [props.items]);

   return (
      <div className="content">
         <div className="title">роли</div>
         <div className="food__items">
            {
               rools.map((food) => {
                  return (
                     <FoodItem key={food.urlId} food={food} />
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
const mapDispatchToProps = (dispatch) => {
   return {
      GetItems: (obj) => dispatch({ type: 'GET_ITEMS', payload: obj }),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sushi);