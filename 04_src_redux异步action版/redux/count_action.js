/*
  该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from "./constant";

//所谓的同步action,就是action的值为Object类型一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})

export const createDecrementAction = data => ({type:DECREMENT ,data})

//所谓的异步action,就是action的值为函数,异步action中一般都要调用同步action,异步action不是必须的。
export const createIncrementAsyncAction = (data,time) => {
  return (dispatch)=>{  //这个函数实际是store帮着处理的。因为store觉得我们能用上dispatch,所以在这里函数中默认是可以接收到dispatch这个函数的
    setTimeout(()=>{
        //异步任务中分发同步action
        dispatch(createIncrementAction(data))
      },time)
  }
}

