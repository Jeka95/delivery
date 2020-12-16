import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import axiosOrder from "../../instance";
import Orders from '../../components/Orders';
import Favorite from "../Favorite";
import "./index.scss";


class PersonalInfo extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showOrders: false,
         items: [],
      }
   }
   ShowOrders = () => {
      let arr = []
      axiosOrder
         .get(`/users/${this.props.ID}/orders.json`)
         .then(response => {
            for (let key in response.data) {
               arr.push(response.data[key]);
            }
            this.setState({
               items: arr
            })
         })
      this.setState({
         showOrders: !this.state.showOrders
      })
   }
   render() {
      return (
         < >
            <Favorite />
            <div className="content">
               <Button variant="contained" color="secondary" onClick={this.ShowOrders}>{this.state.showOrders
                  ? <span>Сховати</span>
                  : <span>Показати усі замовлення</span>}</Button>
               {this.state.showOrders ? <Orders items={this.state.items} /> : null}
            </div>

         </>
      );
   }
}


const mapStateToProps = (state) => {
   return {
      ID: state.curentUserId,
   }
}

export default connect(mapStateToProps)(PersonalInfo);
