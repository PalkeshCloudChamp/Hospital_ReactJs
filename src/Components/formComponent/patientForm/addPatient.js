import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdatePatSec from './updatePatientSecureCall';
class  AddPat extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        // patId : {type : "number" , value : ""},
        patName : {type : "text" , value : "",label : "Patient Name"},
        gender : {type : "dropdown" , value:['male','female','trans'], label :"Gender"},
        patNo : {type : "text" , value : "", label :"Patient Mobile Number"},
        patEmail : {type : "email" , value : "",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", label :"Email Address"},
        patDOB : {type : "date" , value : "", label :"Patient DOB"},
        admitDate : {type : "date" , value : "", label :"Admit Date"},
        docAssi : {type: "number" , value:"", label :"Assigned Doctor"},
        roomNo : {type: "number" , value:"", label :"Room Assigned"},
        patStatus : {type : "dropdown" , value:['not admit','discharged','admit'], label :"Admitted/Discharged"},
        prescription : {type : "textarea" , value : ""},
    }
}
this.updatePat = new UpdatePatSec();
}
    submitData=()=>{
        let updatedValuesObj = document.getElementsByClassName('FormClass')
        let temp = Object.keys(this.state.bodyCompo)
        let postBody = new Object()
        for(let i=0;i<updatedValuesObj.length;i++){
            let test = temp[i]
            postBody[test] =  updatedValuesObj[i].value
            // console.log(test , updatedValuesObj[i].value , postBody);
        }
        console.log(postBody);
        this.updatePat.addPat(postBody)
        .then(res=>{
            alert(res);
            this.props.history.push('/patient');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        let desi = sessionStorage.getItem('stPDesi')
        if(desi === "Wardboy" || desi === "Management"){
            this.props.history.push('/homepage')
        }
        return (
            <>
            <FormDom body = {this.state.bodyCompo}/>
            <button 
            onClick={this.submitData}
            >Submit</button>
            </>
        );
    }
}
export default AddPat;