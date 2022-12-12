import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:"gokul"
      }
    }
  render() {
    
    return (
    <h1>
    <button  onClick={()=>this.setState({count:this.state.count+1})}>ClickMe{this.state.count}</button>
    
  </h1>
      
    )
  }
}
