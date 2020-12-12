import React from 'react';
import { connect } from 'react-redux';


import FoodItem from "../../components/FoodItem"

import "./index.scss";



const Drinks = (props) => {
   const [drinks, setDrinks] = React.useState([]);

   React.useEffect(() => {
      let arr = []
      props.items.map((elem) => {
         if (elem.id === "drink") {
            arr.push(elem)
         }
      })
      setDrinks(arr)
   }, [props.items]);

   return (
      <div className="content">
         <div className="title">напої</div>
         <div className="food__items">
            {
               drinks.map((food) => {
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

export default connect(mapStateToProps)(Drinks);