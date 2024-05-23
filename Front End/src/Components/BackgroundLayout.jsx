import React from 'react'
import { useStateContext } from '../Context'

const BackgroundLayout = () => {
    const {weather} = useStateContext();

    console.log(weather);
  return (
    <div>
      
    </div>
  )
}

export default BackgroundLayout
