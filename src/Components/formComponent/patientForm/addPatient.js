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
        patId : {type : "number" , value : ""},
        patName : {type : "text" , value : ""},
        gender : {type : "dropdown" , value:['male','female','trans']},
        patNo : {type : "text" , value : ""},
        patEmail : {type : "email" , value : ""},
        patDOB : {type : "date" , value : ""},
        docAssi : {type: "number" , value:""}
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