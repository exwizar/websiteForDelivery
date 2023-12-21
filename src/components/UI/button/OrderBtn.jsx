import React from 'react'
import './order.scss'

const OrderBtn = ({item}) => {
  return (
    <button className="catProduct-btn" onClick={() => console.log(item)}>+ Добавить</button>
  )
}

export default OrderBtn