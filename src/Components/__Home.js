import React from 'react';
import Menu from './__Menu'
import Burger from './__Burger'
import ScrollDown from './__ScrollDown'
import '../App.css';


function Home() {
  return (
      <div className="container container__home main-nav">
        <Menu/>
        <Burger/>
        <ScrollDown/>
      </div>
  );
}

export default Home