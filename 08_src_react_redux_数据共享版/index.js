import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
//引入store和Provider。将store交给所有的容器组件
import store from "./redux/store";
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
