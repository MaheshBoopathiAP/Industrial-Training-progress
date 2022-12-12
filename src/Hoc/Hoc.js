import React, { Component } from 'react'

const EnComponent=(OrComponent)=>{
class NewComponent extends Component
 {
    render(){
        return <OrComponent name="Shield"/>
    }
 }
 return NewComponent
}
export default EnComponent