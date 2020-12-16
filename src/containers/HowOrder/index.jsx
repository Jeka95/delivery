import React from 'react';

import "./index.scss";


class HowOrder extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <div className="content">
            <div className="title">Як замовити</div>
            <div className="how-order">
               <div className="how-order__step">
                  <div className="how-order__img">
                     <img src="https://origami.lviv.ua/_nuxt/9eba033.png" alt="" />
                  </div>
                  <h3 className="how-order__title"><span>1</span>оформлення замовлення</h3>
                  <div className="how-order__instuction">
                     Замовити піцу , суші і роли з доставкою по Львову Ви можете щодня з 10.00 до 02.00 через сайт або за телефоном.
                  </div>
               </div>
               <div className="how-order__step">
                  <div className="how-order__img">
                     <img src="https://origami.lviv.ua/_nuxt/0f2e6f4.png" alt="" />
                  </div>
                  <h3 className="how-order__title"><span>2</span>приготування страв</h3>
                  <div className="how-order__instuction">
                     Всі страви готуються безпосередньо після Вашого замовлення, тільки зі свіжих оригінальних сертифікованих продуктів.
                  </div>
               </div>
               <div className="how-order__step">
                  <div className="how-order__img">
                     <img src="https://origami.lviv.ua/_nuxt/d1f7fe9.png" alt="" />
                  </div>
                  <h3 className="how-order__title"><span>3</span>доставка за адресою</h3>
                  <div className="how-order__instuction">
                     Ми доставляємо замовлення протягом 30-90 хв. після оформлення. Час доставки залежить від Вашого району і дорожньої обстановки по місту.
                  </div>
               </div>
               <div className="how-order__step">
                  <div className="how-order__img">
                     <img src="https://origami.lviv.ua/_nuxt/f0ee040.png" alt="" />
                  </div>
                  <h3 className="how-order__title"><span>4</span>оплата замовлення</h3>
                  <div className="how-order__instuction">
                     Замовлення можна оплатити кур’єру при отриманні замовлення. Якщо Ви плануєте розрахуватись купюрою великого номіналу, будь ласка, попередьте оператора
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default HowOrder;