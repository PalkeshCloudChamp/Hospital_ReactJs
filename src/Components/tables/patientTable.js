import axios from "axios";
import React,{Component} from "react";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import TaskBar from "../TaskBar/taskbar";
import jwt_decode from "jwt-decode";
import MyPatient from "./myPatientTable";
import AdmittedPatient from "./admittedPatientTable";
import DischargedPatient from "./dischargedPatientTable";

class PatientTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            show  : 0,
            showAdd : ['Admin','Management'].includes(sessionStorage.getItem('stPDesi'))
        }
        this.formElement = {
            docName : {type: "text",value:""},
            gender : {type: "dropdown" , value : ['Male','Female','Trans'],selected:""},
            docNo : {type:"text",value:""},
            docEmail : {type : "email" , value : ""},
            docDOB : {type : "date", value:""}
        }
        this.secDoc = new SecureDoc();
    }
    componentDidUpdate(prevProps,prevState) {
    }
    componentDidMount(prevProp){
        if(this.state.show === 0){
        this.secDoc.getData("http://localhost:9080/api/showPatient").then(resp=>{
            this.setState({data : resp.data.value})
            console.log("This.State.Data" , this.state.data);
        }).catch(err=>{console.log(err);
            this.props.history.push('/homepage')
        })
    }
        // console.log(jwt_decode(sessionStorage.getItem('Token')).authVal.dataValues['stPDesi']);
    }
    updateValue=(evt)=>{
        this.setState({show : evt.target.value})
        console.log("Change Occur",this.state.show);
    }
    update_Value(){
        this.setState({show : "showMyPatient"})
    }
    render() {
        let tokenDesi = sessionStorage.getItem('stPDesi');
        let tokenVal = sessionStorage.getItem('Token');
        if(tokenDesi== null || tokenVal == null)
    {
        console.log('UnAuthorized Person.');
        this.props.history.push('/');
    }
        return ( 
        <>
        
        <div style={{display:"flex", float:"left"}}>
            <div style={{display:"block"}}>
        <TaskBar/></div>
        <div style={{display:"block" , width:"600%"}}>
        <div className="d-flex justify-content-start">
            {
            jwt_decode(sessionStorage.getItem('Token')).authVal.dataValues['stPDesi'] === 'Doctor' ?
            <button 
            value={jwt_decode(sessionStorage.getItem('Token')).authVal.dataValues['staffId']} 
            onClick={()=>this.update_Value()}>My Patients</button> 
            :null
            }
        <button value="0" onClick={this.updateValue}>All Patients</button>
        <button value="1" onClick={this.updateValue}>Admitted Patients</button>
        <button value="2" onClick={this.updateValue}>Discharged Patients</button>
        </div>
        {this.state.show == 0 ?
        this.state.data.length >0 ?
        <TableDom showAdd = {this.state.showAdd} showUpdate={this.state.showAdd} showDelete={this.state.showAdd} headers={Object.keys(this.state.data[0])} body= {this.state.data} link="http://localhost:9080/api/deletePatient" getLink = "http://localhost:9080/api/showPatient" updateURL = "/updatePatient" addURL = "/addPatient" props={this.props} pkId = {Object.keys(this.state.data[0])[0]}/>
        : null 
        : this.state.show == 1 ? 
        <AdmittedPatient/> 
        : this.state.show == 2 ? 
        <DischargedPatient/>
        : this.state.show == "showMyPatient" ? <MyPatient props = {this.props}/>
        :null}
        </div>
        </div></> );
    }
}

export default PatientTable;