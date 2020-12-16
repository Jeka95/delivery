import React from 'react';


import "./index.scss";
import InfoItem from "./InfoItem";


const Info = () => {
   return (
      <div>
         <nav className="info" >
            <ul className="info__items" >
               <InfoItem link="/contacts">Контакти</InfoItem>
               <InfoItem link="/about">Про нас</InfoItem>
               <InfoItem link="/howtoorder">Як замовити</InfoItem>
               {/* <InfoItem link="/certificate">Сертифікати</InfoItem> */}

            </ul>
         </nav>
      </div>
   );
}

export default Info;