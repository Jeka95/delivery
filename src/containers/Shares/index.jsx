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
      if (this.props.itemsStore.length === 0) {
         getItem
            .get("/menu.json")
            .then(response => {
               this.props.GetItems(response.data);
               this.setState({
                  items: response.data,
                  loading: false,
               })
            })
      } else {
         this.setState({
            items: this.props.itemsStore,
            loading: false,
         })
      }
   }

   componentDidUpdate() {
      this.props.favorite.map((elem) => {
         const isSameName = (element) => element.name === elem.name;
         let num = this.state.items.find(isSameName);
         if (num !== undefined) {
            num.bool = true;
         }
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
                        <FoodItem key={food.urlId} food={food} />
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
      itemsStore: state.itemsServer,
      favorite: state.favorite,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      GetItems: (obj) => dispatch({ type: 'GET_ITEMS', payload: obj }),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shares);

