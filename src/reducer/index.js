// 这是创建reducer函数，专门用来处理发送过来的action


const initState = { //设置初始化的值
    value: 'default value'
}

const reducer = (state = initState, action) =>{
    console.log('reducer:', state, action);
    switch(action.type){
        case 'send_type':
            return Object.assign({}, state, action); //如果返回过来的是action.type的值，则生成新的state
        default:
            return state
    }
}

module.exports = {
    reducer
}
