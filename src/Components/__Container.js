import React from 'react'

import Photo from './__Photo'
import Content from './__Content'


function Container() {
  return (
    <div className="container__contains">
      <Photo/>
      <Content/>
    </div>
  );
}

export default Container