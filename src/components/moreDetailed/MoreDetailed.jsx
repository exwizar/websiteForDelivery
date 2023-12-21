import React from 'react'
import './moreDetailed.scss'

const MoreDetailed = ({item, active, setActive}) => {
    return (
      <div className={active ? 'moreDetailed active' : 'moreDetailed'} onClick={() => setActive(false)}>
          <div className={active ? 'moreDetailed__content active' : 'moreDetailed__content'} onClick={e => e.stopPropagation()}>
            <a className='close' onClick={() => setActive(false)}></a>
              <div className="moreDetailed-block">
                <div className="moreDetailed-photo">
                  <img src={item.pic} alt="food-photo"/>
                </div>
                <div className="moreDetailed-info">
                  <div className="moreDetailed-title">{item.name}</div>
                  <div className="moreDetailed-about">Dolores ratione excepturi obcaecati aperiam, molestiae voluptate commodi? Possimus nisi quos, quisquam voluptatem et quo corrupti deserunt similique.</div>
                  <div className="moreDetailed-price">{item.price} ₽</div>
                  <div className="moreDetailed-weight">Вес: {item.weight}</div>
                  <button className="catProduct-btn">+ Добавить</button>
                </div>
              </div>
          </div>
      </div>
    )
  }
export default MoreDetailed