import React,{Component} from "react";

export default class Count extends Component {
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
