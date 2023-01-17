import React from "react";

export default function intro() {
  return (
    <div>
      <div>
        1. state
        Redux是存在是为了解决state状态之间，互相被改变的状态
        所有的state都存到了object
        tree（dom对象）里面，并且只有唯一的store（容器）去管理他们
      </div>
      <div>
        2. action 
        普通对象，唯一改变state的方法是触发action
        这样确保了state不能直接修改，要被集中化，按顺序来处理
      </div>
      <div>
        3. reducer
        纯函数，为了秒数action如何改变state tree，可以被复用
        先接收state, action，然后返回新的state
      </div>
      <div>
        4. Store
        Store就是把action与reducer联系到一起的对象
        主要职责：
        getState()方法获取state
        dispatch()方法来发送action
        subscribe()方法来注册监听，返回值来注销监听
      </div>
    </div>
  );
}
