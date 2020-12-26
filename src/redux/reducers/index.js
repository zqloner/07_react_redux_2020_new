/*
  引入combineReducers汇总所有的reducer为一个总的reducer
 */
import {combineReducers} from 'redux'

import count from "./count";
import users from "./person";

export default combineReducers({
  count,
  users
})
