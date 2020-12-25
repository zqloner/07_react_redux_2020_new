import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App/>, document.getElementById('root'));

//让所有组件监听Redux中状态变化,若变化了,那么重新渲染App组件。
//因为Diff算法。所以大部分组件是不会重绘重排的。不会影响效率问题。
store.subscribe(()=>{
  ReactDOM.render(<App/>, document.getElementById('root'));
  })
