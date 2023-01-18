import { legacy_createStore as createStore} from "redux";

// 导入我们自己创建好的reducer

import { reducer } from "react";


// 构建store

const store = createStore(reducer);

export default store;