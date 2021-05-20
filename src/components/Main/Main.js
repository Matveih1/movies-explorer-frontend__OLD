import React from 'react';

import './Main.css';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutPoject';

function Main (props) {

  return (
    <>
      <Promo/>
      <NavTab/>
      <AboutProject/>
    </>
  )
}

export default Main;