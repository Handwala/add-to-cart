import React from 'react'
import "../style/navbar.css"
const Navbar = ({size,setShow}) => {
  return (
    <div className="navbar">
        <div className="shoppig" onClick={()=>setShow(true)}>
            shopping
        </div>
        <div className="cart" onClick={()=>setShow(false)}>
            <span>cart</span>
            <span>{size}</span>
        </div>
    </div>
  )
}

export default Navbar