import axios from "axios";
import React,{Component} from "react";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import FormDom from "./formDom";
import jwt_decode from "jwt-decode";
class DischargedPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            desi : sessionStorage.getItem('Token')
            // showAdd : ['Admin'].includes(sessionStorage.getItem('stPDesi'))
        }
        this.secDoc = new SecureDoc();
    }
    componentDidMount(prevProp){
        // console.log(jwt_decode(sessionStorage.getItem('Token')).authVal.dataValues['staffId']);
        this.secDoc.getData(`http://localhost:9080/api/showDischargedPatient`).then(resp=>{
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
    console.log("Value:- ",jwt_decode(sessionStorage.getItem('Token')));
        return ( 
        <>
        {this.state.data.length>0 ? <TableDom headers={Object.keys(this.state.data[0])} showAdd = {false} showUpdate = {false} showDelete = {false} body= {this.state.data} link="http://localhost:9080/api/deleteDischargedPatient" getLink = "http://localhost:9080/api/showDischargedPatient" props={this.props} pkId = {Object.keys(this.state.data[0])[0]}/> : null}
        </> );
    }
}

export default DischargedPatient;