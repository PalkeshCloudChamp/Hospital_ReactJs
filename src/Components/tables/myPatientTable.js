import axios from "axios";
import React,{Component} from "react";
import TableDom from "./tableDom";
import { SecureDoc } from "./secureDoc";
import FormDom from "./formDom";
import jwt_decode from "jwt-decode";
class MyPatient extends Component {
    constructor(props) {
        super(props);
        // this.info = props.location.state;
        this.state = {
            data : [],
            desi : sessionStorage.getItem('Token'),
            showAdd : ['Admin'].includes(sessionStorage.getItem('stPDesi')),
        }
        this.secDoc = new SecureDoc();
    }
    componentDidMount(prevProp){
        this.secDoc.getData(`http://localhost:9080/api/showMyPatient/${jwt_decode(sessionStorage.getItem('Token')).authVal.dataValues['staffId']}`).then(resp=>{
            this.setState({data : resp.data.value})
            console.log("This.State.Data" , this.state.data);
        }).catch(err=>{
            console.log(err);
            this.props.history.push('/homepage')
        })
        console.log(this.props.props);
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
        {this.state.data.length>0 ? 
        <TableDom showAdd={false} showDelete={false} shoeUpdate={true} headers={Object.keys(this.state.data[0])} body= {this.state.data} link="http://localhost:9080/api/deletePatient" getLink = "http://localhost:9080/api/showPatient" updateURL = "/updatePatient" addURL = "/addPatient" props={this.props.props} pkId = {Object.keys(this.state.data[0])[0]}/> :null
    }
        {/* <TableDom headers={Object.keys(this.state.data[0])} showAdd = {false} showUpdate = {true} showDelete = {false} body= {this.state.data} link="http://localhost:9080/api/deleteDoctor" getLink = "http://localhost:9080/api/showDoctor" updateURL = "/updatePatient" addURL = "/addDoc" props={this.props} pkId = {Object.keys(this.state.data[0])[0]}/> : null} */}
        </> );
    }
}

export default MyPatient;