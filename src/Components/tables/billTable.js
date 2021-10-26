import axios from "axios";
import React,{Component} from "react";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import TaskBar from "../TaskBar/taskbar";
class BillTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showAdd : sessionStorage.getItem('stPDesi') == "Admin" ? true : false
        }
        this.secDoc = new SecureDoc();
    }
    getDetailedBill =evt =>{
        let secDoc = new SecureDoc();
        secDoc.getDetailedBill(document.getElementById('ptId').value).then(resp=>{
            console.log(resp.data['Bill Info']);
            console.log(this.props.history.push({
            "pathname"  :    "/detailedBill",
            "state" : resp.data['Bill Info']
            }
                ))
        })
    }
    componentDidMount(prevProp){
        this.secDoc.getData("http://localhost:9080/api/showBill").then(resp=>{
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
        {this.state.data.length>0 ?
        <><input id="ptId" type="number" min="0" placeholder="Enter Patient id"/><button onClick={this.getDetailedBill}>Get Patient Detailed Bill</button>
        <TableDom showAdd = {false} showDelete = {true} showUpdate = {false} headers={Object.keys(this.state.data[0])} body= {this.state.data} link="http://localhost:9080/api/deleteBill" getLink = "http://localhost:9080/api/showBill" props={this.props} pkId = {Object.keys(this.state.data[0])[0]}/> </>
        : null}
        </div></div></> );
    }
}

export default BillTable;