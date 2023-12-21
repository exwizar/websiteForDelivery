import React, { useState } from 'react'
import MoreDetailed from '../moreDetailed/MoreDetailed.jsx';
import './foodCard.scss'

const FoodCard = (item) => {
    const [moreDetailedAcitve, setMoreDetailedActive] = useState(false)
    const food = item.item;
  return (
    <div  className="cardProduct-block">
    <MoreDetailed item={food} active={moreDetailedAcitve} setActive={setMoreDetailedActive}/>
    <div className="cardProduct-img">
        <div className="prewive" onClick={() => setMoreDetailedActive(true)}>
        <div className="prewive-icon"></div>
            <div className='prewive-title'>Узнать подробнее</div>
        </div>
        <img src={food.pic} alt="img" />
    </div>
    <div className="cardProduct-info">
        <div className="feature-weight">{food.weight} г.</div>
    

        <div className='catProduct-name'>{food.name}</div>
        <div className="qty-block">
            <p className='feature-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, modi blanditiis. Eos fuga totam assumenda hic autem quisquam alias omnis vitae saepe.</p>
        </div>
        <div className="catProduct-pay">
            <div className="catProduct-description">{food.price} ₽</div>
            <button className="catProduct-btn">+ Добавить</button>
        </div>
    </div>
</div>
  )
}

export default FoodCard