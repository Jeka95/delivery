import React from 'react';
import { connect } from 'react-redux';


import "./index.scss";
import getItem from "../../instance";
import FoodItem from "../../components/FoodItem"


class Shares extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         reg: /[a-z]/,
         items: []
      }
   }


   componentDidMount() {
      let arr = []
      getItem
         .get("/menu.json")
         .then(response => {
            response.data.map((elem) => {
               if (this.state.reg.test(elem.id)) {
                  arr.push(elem)
               }
            })
            this.setState({
               items: arr
            })
         })

   }






   render() {
      return (

         <div className="content">
            <div className="food__items">
               {
                  this.state.items.map((food) => {
                     return (
                        <FoodItem key={food.name} food={food} />
                     )
                  })
               }
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      UID: state.curentUserId,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {

   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shares);

