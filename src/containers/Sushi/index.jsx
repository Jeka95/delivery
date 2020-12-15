import React from 'react';
import { connect } from 'react-redux';


import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Sushi = (props) => {
   const [rools, setRools] = React.useState([]);

   React.useEffect(() => {

      let arr = []
      props.items.map((elem) => {
         if (elem.id === "sushi") {
            return arr.push(elem)
         }
         return arr
      })
      setRools(arr)

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


export default connect(mapStateToProps)(Sushi);