import React from 'react'
import list from '../data'
import Card from './Card'
import "../style/Card.css"


const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Card item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon