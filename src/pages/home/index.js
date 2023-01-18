import React, { Component } from 'react'
import store from '../../store'
import {sendAction} from '../../action' //导入action构建函数

export default function Home () {

  const handleClick = () => {
    const action = sendAction() //action是函数，拿到action对象后，传递给dispath
    // 利用store, 发送一个action，导入action
    store.dispath(action)
  }

  // 当组件一加载完毕的时候，来监听
  
  return (
    <div>
        <button onClick={handleClick}>点我，发送一个action</button>
    </div>
  )
}
