import React from 'react';

import "./index.scss";
import Logo from "../../components/Logo";
import Info from '../../components/Info';

import SingIn from '../../components/SingIn';


class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {

      return (
         <header className="header">
            <div className="header__wrraper">
               < Logo />
               <div className="header__right">
                  <Info />
                  <SingIn />
               </div>

            </div>
         </header>
      );
   }
}

export default Header;
