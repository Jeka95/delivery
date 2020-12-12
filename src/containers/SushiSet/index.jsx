import React from 'react';
import { connect } from 'react-redux';




import FoodItem from "../../components/FoodItem"

import "./index.scss";



const SushiSet = (props) => {
   const [sushiset, setSushiSet] = React.useState([]);
   React.useEffect(() => {
      let arr = []
      props.items.map((elem) => {
         if (elem.id === "sushiset") {
            return arr.push(elem)
         }
         return arr
      })
      setSushiSet(arr)
   }, [props.items]);

   return (
      <div className="content">
         <div className="title">суші сети</div>
         <div className="food__items">
            {
               sushiset.map((food) => {
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


export default connect(mapStateToProps)(SushiSet);