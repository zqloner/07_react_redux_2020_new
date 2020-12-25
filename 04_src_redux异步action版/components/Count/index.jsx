import React,{Component} from "react";
//引入store,用于获取redux中保存的状态
import store from '../../redux/store'
//引入actionCreator,专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from "../../../src/redux/count_action";

export default class Count extends Component {
  increment = ()=>{
    const {value} = this.selectNumber
    //通知redux加value值
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    //通知redux加value值
    store.dispatch(createDecrementAction(value*1))
  }
  crementIfOdd = ()=>{
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !==0){
      store.dispatch(createIncrementAction(value*1))
    }
  }
  crementIfAsync = ()=>{
    const {value} = this.selectNumber
    // setTimeout(()=>{
    //   store.dispatch(createIncrementAction(value*1))
    //   },1000)
      store.dispatch(createIncrementAsyncAction(value*1,1000))
  }

  render() {
    return (
      <div>
          <h1>当前求和为:{store.getState()}</h1>
        <select ref={c=>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.crementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.crementIfAsync}>异步加</button>&nbsp;&nbsp;
      </div>
    );
  }
}
