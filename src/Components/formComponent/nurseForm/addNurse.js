import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateNurseSec from './updateNurseSecureCall';
class  AddNurse extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        nrsId : {type : "number" , value : ""},
        nrsName : {type : "text" , value : ""},
        gender : {type : "dropdown" , value:['Male','Female','Trans'],selected : "Female"},
        nrsNo : {type : "text" , value : ""},
        nrsEmail : {type : "email" , value : ""},
        nrsDOB : {type : "date" , value : ""},
        wardAssi : {type : "number" , value : ""},
        salary : {type : 'number' , value : ""}
    }
}
this.updateNurse = new UpdateNurseSec();
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
        this.updateNurse.addNurse(postBody)
        .then(res=>{
            alert(res);
            this.props.history.push('/nurse');
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
export default AddNurse;