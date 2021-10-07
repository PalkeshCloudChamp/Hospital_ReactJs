import React , {Component} from 'react'
import { MakeForm } from './makeForm';
import "./Login.css"
class Login extends Component {
    userTypes = ["User",'Admin','Doctor','Management','Nurse','Wardboy']
    gender = ["Gender",'Male','Female','Trans']
    Designation = ['Doc','Nurse','WardBoy','Admin','Management']
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
        <MakeForm ddValue = {this.userTypes} gender = {this.gender} Designation = {this.Designation}></MakeForm>
        </> );
    }
}
 
export default Login;