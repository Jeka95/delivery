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
               <InfoItem link="/contacts">Контакти</InfoItem>
               <InfoItem link="/about">Про нас</InfoItem>
               <InfoItem link="/howtoorder">Як замовити</InfoItem>
               <InfoItem link="/favorite">Улюблене</InfoItem>
               <InfoItem link="/certificate">Сертифікати</InfoItem>

            </ul>
         </nav>
      </div>
   );
}

export default Info;