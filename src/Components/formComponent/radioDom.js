import React, { Component } from "react";
class RadioDOM extends Component{ 
    render(){
        return(
            <div>
                {
                    this.props.value.map((item,pos)=>{

                            if((item == this.props.select)){
                                console.log(this.props.select);
                            return(
                            <>
                            <input type="radio" name={this.props.name!==undefined?this.props.name : "radioName"} value={item} checked/>
                            <label>{item}</label>
                            </>
                            )}
                            else{
                                return(
                                <>
                                <input type="radio" name={this.props.name!==undefined?this.props.name : "radioName"} value={item}/>
                                <label>{item}</label>
                            
                            </>
                    )
                }
            }
        )
    }
    </div>
        )
}}
export default RadioDOM;