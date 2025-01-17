import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount, settotalAmount] = useState(0);
  useEffect(() => {
    settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  }, [cart])
  
  return (
    <>
    <div className='mt-16'>
      {
         cart.length> 0 ?(
          <div>
            <div>
              {
                cart.map((item,index)=>{
                  return <Cartitem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
            <div>
              <div>
                <h1>YOUR CART</h1>
                <h1>SUMMARY</h1>
                <p><span>Total Items: {cart.length}</span></p>
              </div>
              <div>
                <p>Total Amount: ${totalAmount}</p>
                <button>Checkout Now</button>
              </div>
            </div>
          </div>
         ):(<div>
          <h1>Cart empty</h1>
          <Link to='/'><button>Shop Know</button></Link>
         </div>)
      }
    </div>
    </>
  )
}

export default Cart