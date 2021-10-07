import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateNurseSec from './updateNurseSecureCall';
class  UpdateNurse extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        nrsId : {type : "number" , value : this.info['nrsId'], label : "nrsId" , readonly : "true"},
        nrsName : {type : "text" , value : this.info['nrsName']},
        gender : {type : "dropdown" , value:['Male','Female','Trans'],selected : this.info['gender']},
        nrsNo : {type : "text" , value : this.info['nrsNo']},
        nrsEmail : {type : "email" , value : this.info['nrsEmail']},
        nrsDOB : {type : "date" , value : this.info['nrsDOB']},
        wardAssi : {type : "number" , value : this.info['wardAssi']},
        salary : {type : 'number' , value : this.info['salary']}
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
        this.updateNurse.updateNurse(postBody ,parseInt(postBody['nrsId']))
        .then(res=>{
            alert("Nurse Updated");
            this.props.history.push('/Nurse');
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
export default UpdateNurse;