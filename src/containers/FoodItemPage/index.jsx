import React from 'react';
import { connect } from 'react-redux';
import "./index.scss";





const FoodItemPage = (props) => {



   const [item, setItem] = React.useState([{ ingredients: "" }]);
   React.useEffect(() => {
      findItem()
   }, []);

   const findItem = () => {
      let arr = props.items;
      let num = arr.filter(elem => elem.urlId === props.match.params.id);
      setItem(num);
   }
   String.prototype.translit = String.prototype.translit || function () {
      var Chars = {
         'а': 'a', 'б': 'b', 'в': 'v',
         'г': 'g', 'д': 'd', 'е': 'e',
         'ж': 'zh', 'з': 'z',
         'и': 'i', 'й': 'y', 'к': 'k',
         'л': 'l', 'м': 'm', 'н': 'n',
         'о': 'o', 'п': 'p', 'р': 'r',
         'с': 's', 'т': 't', 'у': 'u',
         'ф': 'f', 'х': 'h', 'ц': 'c',
         'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
         'ї': 'i', 'і': 'y', 'ь': '',
         'э': 'e', 'ю': 'yu', 'я': 'ya',
         ' ': '_'
      },
         t = this.toLowerCase();;
      for (var i in Chars) { t = t.replace(new RegExp(i, 'g'), Chars[i]); }
      return t;
   };





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
                     <button className="food-block__btnAdd" onClick={() => { props.AddToCard(item[0]) }} >замовити</button>
                     {console.log("усе вийшло", item[0].ingredients.translit())}
                  </div>
               </div >
               <div className="product__right">
                  <span className="product__subtitle">ІНГРЕДІЄНТИ</span>
                  <div className="product__ingredients">
                     {
                        item[0].ingredients.split(", ").map((elem) => {
                           return (
                              <div className="product__ingredient" key={elem}>
                                 <img src={`/${elem.translit()}.webp`} alt="" />
                                 <span>{elem}</span>
                              </div>)
                        })
                     }
                  </div>
               </div>

            </div >
         </div >
      </div >

   );
}

const mapStateToProps = (state) => {
   return {
      items: state.itemsServer,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      AddToCard: (obj) => dispatch({ type: 'ADD_TO_CARD', payload: obj }),
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodItemPage);


