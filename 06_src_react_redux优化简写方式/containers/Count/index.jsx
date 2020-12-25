//引入Count的UI组件
import CountUI from "../../components/Count";
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";

/*
  原始版本:一般写法
 */
// export default connect(
//   state => ({count:state}),
//   dispatch =>
//     ({
//       addCount:data => dispatch(createIncrementAction(data)),
//       jianCount:data => dispatch(createDecrementAction(data)),
//       addAsyncCount:(data,time) => dispatch(createIncrementAsyncAction(data,time))
//     })
// )(CountUI)

/*
  优化:简写方式
 */
export default connect(
  state => ({count:state}),
    {   //createIncrementAction返回值是action,当action传到这的时候,react-redux会自动分发。
      addCount:createIncrementAction,
      jianCount:createDecrementAction,
      addAsyncCount:createIncrementAsyncAction
    }
)(CountUI)
