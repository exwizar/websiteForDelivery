import React from 'react'
import './moreDetailed.scss'

const MoreDetailed = ({index, active, setActive}) => {
    return (
      <div className={active ? 'moreDetailed active' : 'moreDetailed'} onClick={() => setActive(false)}>
          <div className={active ? 'moreDetailed__content active' : 'moreDetailed__content'} onClick={e => e.stopPropagation()}>
            <a className='close' onClick={() => setActive(false)}></a>
              {index}
          </div>
      </div>
    )
  }
export default MoreDetailed