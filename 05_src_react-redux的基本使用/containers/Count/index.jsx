//引入Count的UI组件
import CountUI from "../../components/Count";
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";

/*
  1,mapStateToProps函数返回的是一个对象
  2,返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件的props的value
  3,mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
  return {count:state}
}

/*
  1,mapStateToProps函数返回的是一个对象
  2,返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件的props的value
  3,mapStateToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    addCount:data => dispatch(createIncrementAction(data)),
    jianCount:data => dispatch(createDecrementAction(data)),
    addAsyncCount:(data,time) => dispatch(createIncrementAsyncAction(data,time))
    }
}

//使用connet()()创建并暴露一个Count的容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountUI)
