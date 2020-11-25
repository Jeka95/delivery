import React, { useState } from 'react';


import "./index.scss";
import InfoItem from "./InfoItem";


const Info = () => {
   const [infoActive, setInfoActive] = useState(false);
   return (
      <div>
         <div className="burgerinfo" onClick={() => setInfoActive(!infoActive)}>
            <span className={infoActive ? "burgerinfo__span active" : "burgerinfo__span"}></span>
         </div>
         <nav className={infoActive ? "info active" : "info"} >
            <ul className="info__items" onClick={() => setInfoActive(false)}>
               <InfoItem link="/">Контакти</InfoItem>
               <InfoItem link="/">Про нас</InfoItem>
               <InfoItem link="/">Як замовити</InfoItem>
               <InfoItem link="/soups">Сертифікати</InfoItem>
            </ul>
         </nav>
      </div>
   );
}

export default Info;