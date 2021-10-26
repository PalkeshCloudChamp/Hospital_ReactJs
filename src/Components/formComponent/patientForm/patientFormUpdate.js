import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdatePatSec from './updatePatientSecureCall';
class  UpdatePat extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        patId : {type : "number" , value : this.info['patId'], label : "PatId" , readonly : "true"},
        patName : {type : "text" , value : this.info['patName']},
        gender : {type : "dropdown" , value:['Male','Female','Trans'],select : this.info['gender']},
        patNo : {type : "text" , value : this.info['patNo']},
        patEmail : {type : "email" , value : this.info['patEmail'],pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"},
        patDOB : {type : "date" , value : this.info['patDOB']},
        admitDate : {type : "date" , value : this.info['admitDate'], label :"Admit Date"},
        docAssi : {type : "number" , value : this.info['docAssi']},
        roomNo : {type: "number" , value:this.info['roomNo'], label :"Room Assigned"},
        patStatus : {type : "dropdown" , value:['not admit','discharged','admit'],select : this.info['patStatus']},
        prescription : {type : "textarea" , value : this.info['prescription']},
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
        this.updatePat.updatePat(postBody ,parseInt(postBody['patId']))
        .then(res=>{
            alert("Patient Updated");
            this.props.history.push('/patient');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
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
export default UpdatePat;