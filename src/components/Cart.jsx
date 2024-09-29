import React, { useEffect, useState } from 'react'
import "../style/Cart.css"

const Cart = ({cart,setCart,handleChange}) => {
  const [price,setPrice] = useState(0)
  

  const handlePrice = (item)=>{
    let ans = 0;
    cart.map((item)=>(
      ans += item.amount * item.price
      
    ))
    setPrice(ans)
  }

  const handleRemove =(id)=>{
    const arr = cart.filter((item)=>item.id  !==id)
    setCart(arr)
  }

  useEffect(()=>{
    handlePrice()
  })
  return (
    <article>
      {
        cart.map((item)=>(
          <div className="cart_box" key={item.id} >
            <div className="img" >
              <img src={item.img} alt="" key={item.img}/>
              <p>{item.title}</p>
            </div>
            <div className="button">
            <button onClick={()=>handleChange(item, +1)}> + </button>
               <button>{item.amount}</button>
            <button onClick={()=>handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price}  </span>
              <button onClick={()=>handleRemove(item.id)}>remove</button>
            </div>
          </div>
        ))
      }
      <div className="total">
        <span>total price</span>
        <span>sh{price} </span>
      </div>
    </article>
  )
}

export default Cart