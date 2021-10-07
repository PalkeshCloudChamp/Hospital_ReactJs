import axios from "axios";
import React,{Component} from "react";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import TaskBar from "../TaskBar/taskbar";
class WardboyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
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
    componentDidMount(prevProp){
        this.secDoc.getData("http://localhost:9080/api/showWardboy").then(resp=>{
            this.setState({data : resp.data.value})
            console.log("This.State.Data" , this.state.data);
        }).catch(err=>{
            console.log(err);
            this.props.history.push('/homepage')
        })
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
        {/* <FormDom body = {this.formElement}/> */}
        <div style={{display:"flex", float:"left"}}>
            <div style={{display:"block"}}>
        <TaskBar/></div>
        <div style={{display:"block" , width:"600%"}}>
        {this.state.data.length>0 ? <TableDom headers={Object.keys(this.state.data[0])} body= {this.state.data} link="http://localhost:9080/api/deleteWardboy" getLink = "http://localhost:9080/api/showWardboy" updateURL = "/updateWardboy" addURL = "/addWardboy" pkId = {Object.keys(this.state.data[0])[0]} props={this.props}/> : null}
        </div></div></> );
    }
}

export default WardboyTable;