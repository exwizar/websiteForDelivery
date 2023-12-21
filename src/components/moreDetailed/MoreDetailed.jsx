import React from 'react'
import './moreDetailed.scss'

const MoreDetailed = ({item, active, setActive}) => {
  console.log(item)
    return (
      <div className={active ? 'moreDetailed active' : 'moreDetailed'} onClick={() => setActive(false)}>
          <div className={active ? 'moreDetailed__content active' : 'moreDetailed__content'} onClick={e => e.stopPropagation()}>
            <a className='close' onClick={() => setActive(false)}></a>
              <div className="moreDetailed-block">
                <div className="moreDetailed-photo">
                  <img src={item.pic} alt="food-photo" width={'500px'} height={'300px'}/>
                </div>
                <div className="moreDetailed-info">
                  <div className="moreDetailed-title">{item.name}</div>
                  <div className="moreDeteiled-about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa provident fugit. Dolores ratione excepturi obcaecati aperiam, molestiae voluptate commodi? Possimus nisi quos, quisquam voluptatem et quo corrupti deserunt similique.</div>
                  <div className="moreDeteiled-weight">{item.weight}</div>
                  <div className="moreDeteiled-price">{item.price}</div>
                  <button className="catProduct-btn">+ Добавить</button>
                </div>
              </div>
          </div>
      </div>
    )
  }
export default MoreDetailed