import axios from "axios";
import React,{Component} from "react";
// import { TableData } from "sequelize-auto/types";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import FormDom from "./formDom";
import TaskBar from "../TaskBar/taskbar";
// import UpdateDoc from "../formComponent/doctorForm/docFormUpdate";
class DoctorTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            desi : sessionStorage.getItem('Token'),
            showAdd : ['Admin'].includes(sessionStorage.getItem('stPDesi'))
        }
        this.formElement = {
            docName : {type: "text",value:""},
            gender : {type: "dropdown" , value : ['Male','Female','Trans'],selected:""},
            docNo : {type:"text",value:""},
            docEmail : {type : "email" , value : ""},
            docDOB : {type : "date", value:""}
        }
        this.secDoc = new SecureDoc();
        // this.updateDocForm = new UpdateDoc();
    }
    componentDidMount(prevProp){
        this.secDoc.getData("http://localhost:9080/api/showDoctor").then(resp=>{
            this.setState({data : resp.data.value})
            console.log("This.State.Data" , this.state.data);
        }).catch(err=>{
            console.log(err);
            this.props.history.push('/homepage')
        })
    }
    test(){
        console.log("data");
    }
    render() {
        let tokenDesi = sessionStorage.getItem('stPDesi');
        let tokenVal = sessionStorage.getItem('Token');
        if(tokenDesi== null || tokenVal == null)
    {
        console.log('UnAuthorized Person.');
        this.props.history.push('/');
    }
    console.log("Are equal?=",this.state.showAdd == sessionStorage.getItem('stPDesi'));
    console.log("Values:- ",this.state.showAdd,sessionStorage.getItem('stPDesi'));
        return ( 
        <>
        <div style={{display:"flex", float:"left"}}>
            <div style={{display:"block"}}>
        <TaskBar/></div>
        {/* <FormDom body = {this.formElement}/> */}
        <div style={{display:"block" , width:"600%"}}>
        {this.state.data.length>0 ? <TableDom headers={Object.keys(this.state.data[0])} showAdd = {this.state.showAdd} showUpdate = {this.state.showAdd} showDelete = {this.state.showAdd} body= {this.state.data} link="http://localhost:9080/api/deleteDoctor" getLink = "http://localhost:9080/api/showDoctor" updateURL = "/updateDoc" addURL = "/addDoc" props={this.props} pkId = {Object.keys(this.state.data[0])[0]}/> : null}
        </div></div></> );
    }
}

export default DoctorTable;