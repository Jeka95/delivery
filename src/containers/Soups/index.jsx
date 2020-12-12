import React from 'react';
import { connect } from 'react-redux';


import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Soups = (props) => {
   const [soups, setSoups] = React.useState([]);

   React.useEffect(() => {

      let arr = []
      props.items.map((elem) => {
         if (elem.id === "soup") {
            return arr.push(elem)
         }
         return arr
      })
      setSoups(arr)

   }, [props.items]);

   return (
      <div className="content">
         <div className="title">супи</div>
         <div className="food__items">
            {
               soups.map((food) => {
                  return (
                     <FoodItem key={food.name} food={food} />
                  )
               })
            }
         </div>
      </div >
   );
}
const mapStateToProps = (state) => {
   return {
      items: state.itemsServer,
   }
}


export default connect(mapStateToProps)(Soups);
