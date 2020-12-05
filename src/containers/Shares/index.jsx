import React from 'react';


import "./index.scss";
import getItem from "../../instance";
import FoodItem from "../../conponents/FoodItem"
import PizzaIcon from '../../assets/pizza';
import RoolIcon from '../../assets/Rool';
import SusiSetIcon from '../../assets/SusiSet';
import SoupIcon from '../../assets/Soup';
import SaladIcon2 from '../../assets/salat2';
import DrinkIcon from '../../assets/Drink';

// const Shares = () => {
//    let reg = /salad/;
//    const [items, setItems] = React.useState([]);

//    React.useEffect(() => {

//       getItem
//       .get("/menu.json")
//       .then(response => {
//          let arr=[]
//          response.data.map((elem) => {
//             console.dir(reg);
//             if ( reg.test(elem.id))   {
//                arr.push(elem)
//             }
//          })
//          setItems(arr)
//       })
// }, []);
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
   ChooseMenu = (e) => {
      console.dir(e.target.id);
      console.log(e);
      console.dir(e);
      let regex = new RegExp(`${e.target.id}`)
      console.dir(regex);
      let arr = []
      this.setState({
         reg: regex
      })
      getItem
         .get("/menu.json")
         .then(response => {
            response.data.map((elem) => {
               console.log();
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

         <div>
            <div>
               <button id="pizza" onClick={this.ChooseMenu}> <PizzaIcon /> Піца</button>
               <button id="rool" onClick={this.ChooseMenu}> <RoolIcon />Ролли</button>
               <button id="sushiset" onClick={this.ChooseMenu}><SusiSetIcon /> Суші Сети</button>
               <button id="soup" onClick={this.ChooseMenu}><SoupIcon />Супи</button>
               <button id="salad" onClick={this.ChooseMenu}><SaladIcon2 /> Салати</button>
               <button id="drink" onClick={this.ChooseMenu}><DrinkIcon />  Напої</button>
            </div>
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

export default Shares;

//    return (

//       <div>
//          <button onClick={() => {  
//             reg = /pizza/;
//             console.log(reg);
//             React.useEffect;
//          }}>Pizza</button>

//       <div className="food__items">
//          {
//             items.map((food) => {
//                return (
//                   <FoodItem key={food.name} food={food} />
//                )
//             })
//          }
//          </div>
//          </div>
//    );
// }

// export default Shares;