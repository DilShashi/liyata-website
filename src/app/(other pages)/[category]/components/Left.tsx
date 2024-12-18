import React from 'react'
import Categories from './Categories'
import Reset from './Reset'
import Price from './Price'

function Left() {
  return (
    <div>
      {/* Categories Component */}
      <Categories />    
      <div>
        <Reset /> 
      </div>
      <div>
        <Price />
      </div>
    </div>
    
  )
}

export default Left