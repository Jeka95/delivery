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
      getItem
         .get("/menu.json")
         .then(response => {
            this.props.GetItems(response.data);
            this.setState({
               items: response.data
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
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      GetItems: (obj) => dispatch({ type: 'GET_ITEMS', payload: obj }),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shares);

