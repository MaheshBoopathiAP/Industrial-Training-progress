import React, { Component } from 'react'
import EnComponent from './Hoc'

 class ClickCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {count:0}
  }
  render() {
    return (
      <div>
          <button onClick={this.inc}>Click{this.state.count}</button>
          <h2>{this.props.name}</h2>
      </div>
      
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}
export default EnComponent(ClickCounter)
