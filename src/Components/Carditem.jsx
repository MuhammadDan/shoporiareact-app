import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

const Carditem = ({item,itemIndex}) => {
  return (
    <div>
      <div>
         <div><img src='' /></div>
         <div>
          <h1>title</h1>
          <h1>description</h1>
          <div>
            <p>price</p>
            <div><FcDeleteDatabase /></div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Carditem