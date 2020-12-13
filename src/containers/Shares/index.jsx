import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';


import "./index.scss";
import getItem from "../../instance";
import FoodItem from "../../components/FoodItem"


class Shares extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         reg: /[a-z]/,
         items: [],
         loading: true,
      }
   }


   componentDidMount() {
      getItem
         .get("/menu.json")
         .then(response => {
            this.props.GetItems(response.data);
            this.setState({
               items: response.data,
               loading: false,
            })
         })

   }

   render() {
      let Page = this.state.loading
         ? (<div className="content">
            <LinearProgress />
            <LinearProgress color="secondary" />
         </div>)
         : (<div className="content">
            <div className="food__items">
               {
                  this.state.items.map((food) => {
                     return (
                        <FoodItem key={food.name} food={food} />
                     )
                  })
               }
            </div>
         </div>)


      return (
         <>
            { Page}
         </>
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

