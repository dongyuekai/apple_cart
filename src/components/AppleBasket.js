import React from 'react'
import { observer } from 'mobx-react-lite'
import AppleItem from './AppleItem'
import '../styles/appleBasket.scss'

import { useRootStore } from '../stores/RootStore'

/** 获取未吃苹果的组件数组*/
function getAppleItem(apples, eatApple) {
  let data = [];
  apples.forEach(apple => {
    if (!apple.isEaten) {
      data.push(<AppleItem apple={apple} eatApple={eatApple} key={apple.id} />)
    }
  });

  if (!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);

  return data;
}

function ApplleBasket() {
  let { appleStore: { apples, status, isPicking, buttonText, pickApple, eatApple } } = useRootStore()
  let {
    appleNow: { quantity: notEatenQuantity, weight: notEatenWeight },
    appleEaten: { quantity: EatenQuantity, weight: EatenWeight }
  } = status
  return (
    <div className='appleBusket'>
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克
                        </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div>
        </div>
      </div>

      <div className="appleList">
        {getAppleItem(apples, eatApple)}
      </div>

      <div className="btn-div">
        <button className={isPicking ? 'disabled' : ''} onClick={() => pickApple()} >{buttonText}</button>
      </div>
    </div>
  )
}
export default observer(ApplleBasket)
