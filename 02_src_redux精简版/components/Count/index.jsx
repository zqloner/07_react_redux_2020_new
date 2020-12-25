import React,{Component} from "react";
//引入store,用于获取redux中保存的状态
import store from '../../redux/store'
export default class Count extends Component {
  increment = ()=>{
    const {value} = this.selectNumber
    //通知redux加value值
    store.dispatch({type:'increment',data:value*1})
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    //通知redux加value值
    store.dispatch({type:'decrement',data:value*1})
  }
  crementIfOdd = ()=>{
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !==0){
      store.dispatch({type:'increment',data:value*1})
    }
  }
  crementIfAsync = ()=>{
    const {value} = this.selectNumber
    setTimeout(()=>{
      store.dispatch({type:'increment',data:value*1})
      },1000)
  }
  //检测redux中状态的变化,只要变化,就调用render。
  // componentDidMount() {
  //   //一挂载就检测redux中状态的变化,只要变化,就调用render。
  //   store.subscribe(()=>{
  //     console.log("检测store中状态的变化的回调")
  //     //render()方法是不能通过this.render()方法调用的。没有用
  //     //但是需要render更新view。所以可以用
  //     this.setState({})
  //   })
  // }

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
