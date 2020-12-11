import React from 'react';
import { connect } from 'react-redux';

import "./index.scss";
import FavoriteItem from '../../components/FavoriteItem';


class Favorite extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }



   render() {
      return (
         <div className="content">
            <div>Улюблене</div>
            <div className="food__items">
               {
                  this.props.favorite.map((food) => {
                     return (<div key={food.name}>
                        <button onClick={() => { this.props.RemoveFavorite(food) }}>X</button>
                        <FavoriteItem food={food} />
                     </div>
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
      ID: state.curentUserId,
      favorite: state.favorite,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {

      RemoveFavorite: (obj) => dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: obj })
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);