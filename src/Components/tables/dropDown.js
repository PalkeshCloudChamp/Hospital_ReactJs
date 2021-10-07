import React, { Component } from "react";
import "./dd.css"
class DD extends Component{ 
    render(){   
        // console.log(this.props.select)
        return (
            <>
            <select id = {this.props.id} className = 'form-control'>
                {
                this.props.val.map((item,pos)=>{
                    if(item == this.props.select){
                        return (<option defaultValue = {item} selected>{item}</option>)   
                    }else
                    {return (<option value = {item}>{item}</option>)}
                })
                }
            </select>
            </>
        )
    }
}
export default DD;