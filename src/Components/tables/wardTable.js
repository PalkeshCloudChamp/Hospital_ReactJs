import axios from "axios";
import React,{Component} from "react";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import TaskBar from "../TaskBar/taskbar";
class WardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showAdd : sessionStorage.getItem('stPDesi') == "Admin" ? true : false
        }
        this.formElement = {
            wardNo : {type: "text",value:""},
            wardType : {type: "text"},
            containAc : {type:"text",value:""},
            doubleBed : {type : "text" , value : ""},
            // docDOB : {type : "date", value:""}
        }
        this.secDoc = new SecureDoc();
    }
    componentDidMount(prevProp){
        this.secDoc.getData("http://localhost:9080/api/showWard").then(resp=>{
            this.setState({data : resp.data.value})
            console.log("This.State.Data" , this.state.data);
        }).catch(err=>{console.log(err);
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
        
        <div style={{display:"flex", float:"left"}}>
            <div style={{display:"block"}}>
        <TaskBar/></div>
        <div style={{display:"block" , width:"600%"}}>
        {this.state.data.length>0 ? <TableDom showAdd = {this.state.showAdd} showDelete = {this.state.showAdd} showUpdate = {this.state.showAdd} headers={Object.keys(this.state.data[0])} body= {this.state.data} link="http://localhost:9080/api/deleteWard" getLink = "http://localhost:9080/api/showWard" updateURL = "/updateWard" addURL = "/addWard" props={this.props} pkId = {Object.keys(this.state.data[0])[0]}/> : null}
        </div></div></> );
    }
}

export default WardTable;