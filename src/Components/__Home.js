import React from 'react';
import Menu from './__Menu'
import ScrollDown from './__ScrollDown'
import '../App.css';


function Home() {
  return (
    <div className="container__home">
      <Menu/>
      <ScrollDown/>
    </div>
  );
}

export default Home