import React from 'react';

import "./index.scss";


class Contacts extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <div className="content">
            <div className="title">Контакти</div>
            <div className="contact-title">Якщо у Вас виникли питання, зв'яжіться з нами будь-яким зручним способом. Радісно вам допоможемо!</div>
            <div className="tel">+38 (096) 12-34-567</div>
            <div className="tel">+38 (093) 12-34-567</div>
            <div className="tel">+38 (063) 12-34-567</div>
         </div>
      );
   }
}

export default Contacts;