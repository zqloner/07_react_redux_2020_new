import React,{Component} from "react";
import {connect} from 'react-redux'
import {nanoid} from "nanoid";
import {addPerson} from "../../redux/actions/person";

class Person extends Component {
  addPerson=(person)=>{
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:nanoid(),name,age}
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
    }

  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件求和为{this.props.state.count}</h2>
        <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
        <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.state.users.map(user=>(
                <li key={user.id}>{user.name}-----------{user.age}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default connect(
  state=>({state}),
  {
    addPerson
  }
)(Person)
