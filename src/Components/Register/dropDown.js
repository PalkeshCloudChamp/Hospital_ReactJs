import React, { Component } from "react";
import "./dd.css"
class DD extends Component{ 
    render(){   
        // console.log(this.props.val)
        return (
            <div>
            <select id = {this.props.id} className = 'form-control'>
                {
                this.props.val.map((item,pos)=>{
                    return (<option value = {item}>{item}</option>)
                })
                }
            </select>
            </div>
        )
    }
}
export default DD;