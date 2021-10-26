import React, { Component } from "react";
import "./dd.css"
class InputDom extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
        showError : false
    }
}
    render() {
        // console.log(this.props.selected)
        return (
            <>
                <input type={this.props.type}
                defaultValue={this.props.value}
                // pattern={this.props.pattern}
                onChange={(evt) => {
                    var format = new RegExp(this.props.pattern);
                    console.log(format.test(evt.target.value));
                    console.log("Show Error Value:- ",this.state.showError);
                    if (format.test(evt.target.value)) {
                        console.log("Pattern Match");
                        this.setState((prevState,prevProp)=>{
                            return({showError : false})
                        })
                    }
                    else{
                        this.setState((prevState,prevProp)=>{
                            return({showError : true})
                        })
                    }
                }} 
                className='form-control FormClass' />
                <br></br>
                <div className="text-danger">
                {this.state.showError ? <>Pattern Not Match</> 
                : null}
                </div>
            </>
        )
    }
}
export default InputDom;