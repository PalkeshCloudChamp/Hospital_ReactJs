import React, { Component } from "react";
import DD from "./dropDown";
import axios from 'axios';

class MakeForm extends Component {
constructor(props){
    super(props)
}
    state = {
        name: '',
        nameErrorVisi: false,
        email: '',
        emailerrorVisi: false,
        password: '',
        passerrorVisi: false,
        doberroVisi : false
    }

    validateUserName = evt => {
        this.setState((prevState, prevProp) => {
            console.log(prevState.name.length)
            if (evt.target.value.length < 5) {
                if(evt.target.value.length === 0){  
                return ({
                    nameErrorVisi: false,
                    name: evt.target.value
                })
                }
                else{
                return ({
                    nameErrorVisi: true,
                    name: evt.target.value
                })
            }
            }
            else {
                return ({
                    nameErrorVisi: false,
                    name: evt.target.value
                })
            }
        })
    }

    ValidateEmail = evt => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (evt.target.value.match(mailformat) || evt.target.value.length === 0) {
            this.setState((prevState, prevProp) => {
                return ({
                    email: evt.target.value,
                    emailerrorVisi: false
                })
            });
        }
        else {
            this.setState((prevState, prevProp) => {
                return ({
                    email: evt.target.value,
                    emailerrorVisi: true
                })
            });
        }
    }


    ValidatePassword = evt => {
        var passformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (evt.target.value.match(passformat) || evt.target.value.length === 0) {
            this.setState((prevState, prevProp) => {
                return ({
                    password: evt.target.value,
                    passerrorVisi: false
                })
            });
        }
        else {
            this.setState((prevState, prevProp) => {
                return ({
                    password: evt.target.value,
                    passerrorVisi: true
                })
            });
        }
    }

    validateDOB = evt =>{
        // console.log(evt.target.value);
        let temp_date = new Date(evt.target.value)
        let now_date = new Date()
        console.log(now_date - temp_date);
        this.setState({doberroVisi : (now_date - temp_date) < 0})
    } 

    addNewStaffMember = evt =>{
        let token = sessionStorage.getItem('Token')
        let data = {
            "name" : this.state.name,
            "email" : this.state.email,
            "password" : this.state.password,
            "staffId" : document.getElementById('stId').value,
            "phoneNo" : document.getElementById('phoneNo').value,
            "userType" : document.getElementById("uType").value,
            "gender" : document.getElementById("gend").value,
            "dob" : document.getElementById("dob").value,
            "address" : document.getElementById("add").value,
            "salary" : document.getElementById("sal").value
        }
        console.log(data.password)
        // JSON.stringify(data)
        if(data.userType == "Doctor"){
            axios.post('http://localhost:9080/api/addDoctor',{
                "docId" : data.staffId,
                "docName" : data.name,
                "gender" : data.gender,
                "docNo" : data.phoneNo,
                "docEmail" : data.email,
                "docDOB" : data.dob
            },
            {
                headers : {
                    'Content-Type' : "application/json",
                    'Authorization' : sessionStorage.getItem('Token')
                }
            }
            ).then(res =>alert(`Doctor Added Successfully`)).catch(err=>alert("Some error occured while registering doctor"))
        }
        else if(data.userType == "Nurse"){
            axios.post('http://localhost:9080/api/addNurse',{
                "nrsId" : data.staffId,
                "nrsName" : data.name,
                "gender" : data.gender,
                "nrsNo" : data.phoneNo,
                "nrsEmail" : data.email,
                "nrsDOB" : data.dob,
                "salary" : data.salary
            },
            {
                headers : {
                    'Content-Type' : "application/json",
                    'Authorization' : sessionStorage.getItem('Token')
                }
            }).then(res =>alert(`Nurse Added Successfully`)).catch(err=>alert("Some error occured while registering Nurse"))
        }
        else if(data.userType == "Wardboy"){
            axios.post('http://localhost:9080/api/addWardboy',{
                "wbId" : data.staffId,
                "wbName" : data.name,
                "gender" : data.gender,
                "wbNo" : data.phoneNo,
                "wbEmail" : data.email,
                "wbDOB" : data.dob,
                "salary" : data.salary
            },
            {
                headers : {
                    'Content-Type' : "application/json",
                    'Authorization' : sessionStorage.getItem('Token')
                }
            }).then(res =>alert(`Wardboy Added Successfully`)).catch(err=>alert("Some error occured while registering Wardboy"))
        }
        axios.post('http://localhost:9080/api/addStaff',{
            "staffId" : data.staffId,
            "stPName" : data.name,
            "stPDesi" : data.userType,
            "gender" : data.gender,
            "stPNo" : data.phoneNo,
            "stPEmail" : data.email,
            "stPDOB" : data.dob,
            "stPAdd" : data.address,
            "stPSal" : data.salary,
            "stPass" : data.password,
        },
        {
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        }).then(res =>alert("Staff Member Added Successfully.")).catch(err=>alert("Some error occured while registering Staff"))
        this.props.props.history.push("/staff")
    }
    calncelButton = evt =>{
        console.log(this.props.props.history.push('/staff'));
    }
    render() {
        // console.log(this.props.props.history.push('/staff'))
        return (<>
            <div className="container card mt-5">
                <button onClick = {this.calncelButton}>Cancel</button>
                <form className='card-body'>
                    <div className='form-group mb-3'>
                        <label>StaffId*</label><br></br>
                        <input type='text' placeholder="Enter value" id="stId" className='form-control' required />
                        <label>UserName*</label><br></br>
                        <input type='text' placeholder="Enter value" className='form-control' onChange={this.validateUserName} value={this.state.name} required />
                        <div className="text-danger">{this.state.nameErrorVisi ? <>Minimum size of Name (5)</> : null}</div>
                        <label>Email*</label><br></br>
                        <input type='email' placeholder="Enter value" className='form-control' onChange={this.ValidateEmail} required />
                        <div className="text-danger">{this.state.emailerrorVisi ? <>Write Correct Email Address.</> : null}</div>
                        <label>Password*</label><br></br>
                        <input type='password' placeholder="Enter value" onChange={this.ValidatePassword} className = "form-control" required />
                        <div className="text-danger">{this.state.passerrorVisi ? <>Make a Strong Password</> : null}</div>
                        <label>UserType*</label><br></br>
                        <DD val = {this.props.ddValue} id="uType" key="uType"/>
                        <label>PhoneNo*</label><br></br>
                        <input type='text' placeholder="Enter value" id="phoneNo" className='form-control' required />
                        <label>Gender*</label><br></br>
                        <DD val = {this.props.gender} id="gend" key="gend"/>
                        <label>DOB*</label><br></br>
                        <input type='date' onChange={this.validateDOB} className = "form-control" id="dob" required/>
                        <div className="text-danger">{this.state.doberroVisi ? <>Invalid DOB</> : null}</div>
                        <label>Address*</label><br></br>
                        <input type='text' placeholder="Enter value" id="add" className='form-control'/>
                        <label>Salary*</label><br></br>
                        <input type='number' placeholder="Enter value" id="sal" className='form-control'/>
                        <button type="submit" className="btn btn-primary form-control" onClick = {this.addNewStaffMember} disabled={(this.state.nameErrorVisi || this.state.emailerrorVisi || this.state.passerrorVisi || this.state.doberroVisi)}>Submit</button>
                    </div>
                </form>
            </div>
        </>)
    }
}
export { MakeForm }