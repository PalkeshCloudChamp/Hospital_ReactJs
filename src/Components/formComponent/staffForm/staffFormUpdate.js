import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateStaffSec from './updateStaffSecureCall';
class  UpdateStaff extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        staffId : {type : "number" , value : this.info['staffId'], label : "staffId" , readonly : "true"},
        stPName : {type : "text" , value : this.info['stPName']},
        gender : {type : "dropdown" , value:['Male','Female','Trans'],select : this.info['gender']},
        stPNo : {type : "text" , value : this.info['stPNo']},
        stPEmail : {type : "email" , value : this.info['stPEmail']},
        stPDOB : {type : "date" , value : this.info['stPDOB']},
        stPDesi : {type : "dropdown" , value:['Doctor','Wardboy','Nurse','Management','Admin'],select : this.info['stPDesi']},
        stPAdd : {type : "text" , value : this.info['stPAdd']},
        stPSal : {type : "number" , value : this.info['stPSal']},
        stPass : {type : "text" , value : this.info['stPass'],pattern : "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"},
    }
}
this.updateStaff = new UpdateStaffSec();
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
        this.updateStaff.updateStaff(postBody ,parseInt(postBody['staffId']))
        .then(res=>{
            alert("Staff Updated");
            this.props.history.push('/staff');
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
export default UpdateStaff;