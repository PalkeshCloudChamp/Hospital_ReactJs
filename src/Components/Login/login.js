import React,{Component} from "react";
import { MakeForm } from "./makeForm";
import "./login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        console.log(this.props);
        return (
        <>
        <MakeForm onClick = {this.authUser} props = {this.props}/>
        </>);
    }
}
 

export default Login;