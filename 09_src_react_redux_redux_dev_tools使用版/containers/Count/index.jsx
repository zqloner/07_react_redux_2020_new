import React,{Component} from "react";
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/actions/count";

class Count extends Component {
  increment = ()=>{
    const {value} = this.selectNumber
    this.props.addCount(value*1)
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.jianCount(value*1)
  }
  crementIfOdd = ()=>{
    const {value} = this.selectNumber
    if (this.props.count%2!==0){
      this.props.addCount(value*1)
    }
  }
  crementIfAsync = ()=>{
    const {value} = this.selectNumber
    this.props.addAsyncCount(value*1,500)
  }

  render() {
    const {count} = this.props
    return (
      <div>
        <h1>当前求和为:{count}</h1>
        <h2>我是Count组件,下方组件总人数为:{this.props.users.length}</h2>
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
export default connect(
  state => ({count:state.countReducer,users:state.personReducer}),
    {   //createIncrementAction返回值是action,当action传到这的时候,react-redux会自动分发。
      addCount:createIncrementAction,
      jianCount:createDecrementAction,
      addAsyncCount:createIncrementAsyncAction
    }
)(Count)
