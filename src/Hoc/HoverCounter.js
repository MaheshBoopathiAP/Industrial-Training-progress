import React, { Component } from 'react'

export default class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {count:0}
    }
  render() {
    return (
      <div>
        <button onMouseEnter={this.inc}>HoverMe{this.state.count}</button>
      </div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}
