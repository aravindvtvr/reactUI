import React from 'react'
import NavBar from '../NavBar';

const Hello = () => {
  
  return (
    
    <div className='dummyClass'>
      <NavBar/>
      
    </div>
  )

  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Hello Vishwas')
  // )
}

export default Hello
