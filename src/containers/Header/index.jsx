import React from 'react';

import "./index.scss";
import Logo from "../../conponents/Logo";
import Menu from '../../conponents/Menu';
import Info from '../../conponents/Info';
import Basket from "../../conponents/Basket"
import SingIn from '../../conponents/SingIn';


class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      return (
         <header>
            <Logo />
            <Menu />
            <Info />
            <Basket />
            <SingIn />
         </header>
      );
   }
}

export default Header;
