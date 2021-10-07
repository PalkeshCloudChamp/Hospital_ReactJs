import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateStaffSec from './updateStaffSecureCall';
class  AddStaff extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        staffId : {type : "text"},
        stPName : {type : "text" , value : ""},
        gender : {type : "dropdown" , value:['Male','Female','Trans'],select : ""},
        stPNo : {type : "text" , value : ""},
        stPEmail : {type : "email" , value : ""},
        stPDOB : {type : "date" , value : ""},
        stPDesi : {type : "dropdown" , value:['Doctor','Wardboy','Nurse','Management','Admin'],select : "Doctor"},
        stPAdd : {type : "text" , value : ""},
        stPSal : {type : "number" , value : ""},
        stPass : {type : "password" , value : ""},
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
        this.updateStaff.addStaff(postBody)
        .then(res=>{
            alert(res);
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
export default AddStaff;