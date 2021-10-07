import React, { Component } from "react";
import axios from "axios";
// import DoctorTable from '../tables/doctorTable';

class MakeForm extends Component {
constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
    }
    this.props = this.props.props;
}
    ValidateEmail = evt => {
            this.setState((prevState, prevProp) => {
                return ({
                    email: evt.target.value,
                })
    })
}


    ValidatePassword = evt => {
            this.setState((prevState, prevProp) => {
                return ({
                    password: evt.target.value,
                })
            });
        }

        authUser = evt =>{
            axios.post("http://localhost:9080/api/authUser",{"email" : this.state.email , "password" : this.state.password },{
                headers : {
                    "Content-type" : "Application/json"
                }
            }).then(data=>{
                alert(`Received data:- ${JSON.stringify(data)}`)
                console.log(data);
                sessionStorage.setItem("Token" , data.data.token);
                sessionStorage.setItem("stPDesi" , data.data.value['stPDesi']);
                this.props.props.history.push({
                    pathname : '/homepage',
                    sta : {info : data}
                })
        })
        .catch(err=>{console.log("Some intenal error" , err)
        // this.props.history.push('/doctor');
    })
       
        }

    render() {
        return (<>
            <div className="container card mt-5">
                <form className='card-body'>
                    <div className='form-group '>
                        <label>Email*</label>
                        <input type='email' placeholder="Enter value" id= "userEmail" className='form-control' onChange={this.ValidateEmail} required />
                        <div className="text-danger">{this.state.emailerrorVisi ? <>Write Correct Email Address.</> : null}</div>
                        <label>Password*</label>
                        <input type='password' placeholder="Enter value" id= "userPass" onChange={this.ValidatePassword} className = "form-control" required />
                        <div className="text-danger">{this.state.passerrorVisi ? <>Make a Strong Password</> : null}</div>
                        <br/><input type="button" className="btn btn-primary form-control" value="Submit" onClick = {this.authUser.bind(this)}/>
                    </div>
                </form>
            </div>
        </>)
    }
}
export { MakeForm }