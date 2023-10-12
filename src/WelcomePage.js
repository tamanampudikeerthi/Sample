import React from 'react'
import { Consumer } from './Context';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome user</h1>
      <Consumer>
        {(value)=>(
      <h2>ID:{value.id} Name:{value.name}</h2>
        )}
      </Consumer>
    </div>
  )
}

export default WelcomePage;
