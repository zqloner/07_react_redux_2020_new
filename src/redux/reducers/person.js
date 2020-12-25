
import {ADDPERSON} from "../constant";

const initState = []
export default function personReducer(preState = initState,action) {
  const {type,data} = action
  switch (type) {
    case ADDPERSON:
         return [data,...preState]
    default:
         return preState
  }
}
