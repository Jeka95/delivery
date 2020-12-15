import React from 'react';
import { connect } from 'react-redux';

import "./index.scss";



const FoodItemPage = (props) => {

   const [item, setItem] = React.useState([{}]);
   React.useEffect(() => {
      findItem()
   }, []);

   const findItem = () => {
      let arr = props.items;
      let num = arr.filter(elem => elem.urlId === props.match.params.id);
      setItem(num);
   }
   return (
      <div className="content">
         <div className="product">
            <h2 className="product__title"><span>{item[0].name}</span></h2>
            <div className="product__discription">
               <div className="product__left">
                  <img className="product__img" src={item[0].img} alt={item[0].urlId} />
                  <div className="product__info">
                     <span className="product__price">{item[0].price} грн</span>
                     <span className="product__weight">{item[0].weight} г</span>
                     <button>замовити</button>
                  </div>
               </div>
               <div className="product__right">
                  <div className="product__ingredients"></div>
               </div>
               {console.log(item[0].ingredients.split(","))}
            </div>
         </div>
      </div>

   );
}

const mapStateToProps = (state) => {
   return {
      items: state.itemsServer,
   }
}
export default connect(mapStateToProps)(FoodItemPage);


