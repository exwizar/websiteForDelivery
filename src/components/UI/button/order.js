import React from 'react'
import './order.scss'

const OrderBtn = ({heading, onClick}) => {
  return (
    <button onClick = {onClick} className='btn-order'>Заказать звонок</button>
  )
}

export default OrderBtn