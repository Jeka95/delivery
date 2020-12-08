import React from 'react';

import "./index.scss";
import Logo from "../../components/Logo";
import Menu from '../../components/Menu';
import Info from '../../components/Info';
import Basket from "../../components/Basket"
import SingIn from '../../components/SingIn';


class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {

      return (
         <header>
            < Logo />
            <Menu />
            <Info />
            <Basket />
            <SingIn />
         </header>
      );
   }
}

export default Header;
