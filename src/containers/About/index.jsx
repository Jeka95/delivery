import React from 'react';

import "./index.scss";
import Aboutimg from "../../assets/About.jpg";


class About extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <div className="content">
            <h2 className="title">Про нас</h2>
            <div className="about">
               <div className="about__discription">
                  <p>React Delivery у Львові створений із турботою про клієнтів. Ми уважно ставимося до сервісу та невпинно працюємо, прагнучи до досконалості.</p>
                  <p>Ми використовуємо тільки сертифіковані продукти, що закупляються у найкращих постачальників, ретельно контролюємо кожну поставку, процеси зберігання і приготування.</p>
                  <p>Працівники кухні – професійні кухарі, що пройшли атестацію і необхідні санітарні обстеження.</p>
               </div>
               <div className="about__img">
                  <img src={Aboutimg} alt="упс" />
               </div  >
               <div className="about__benefits" >
                  <h3>Переваги доставки суші та піци React Delivery</h3>
                  <span>Ввічливий кваліфікований персонал</span>
                  <span>Незмінно свіжа та якісна продукція</span>
                  <span>Швидка вчасна доставка в заявлені райони міста</span>
                  <span>Великі порції та широке меню на будь-який смак</span>
               </div>
            </div>
         </div>
      );
   }
}

export default About;