import React, { Component } from "react";
import "./dd.css"
class DD extends Component{ 
    render(){   
        console.log(this.props.selected)
        return (
            <>
            <select id = {this.props.id} className = 'form-control FormClass'>
                {
                this.props.val.map((item,pos)=>{
                    if(item == this.props.selected){
                        return (<option value = {item} selected>{item}</option>)   
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