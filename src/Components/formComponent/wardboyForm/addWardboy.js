import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateWardboySec from './updateWardboySecureCall';
class  AddWardboy extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        wbId : {type : "number" , value : ""},
        wbName : {type : "text" , value : ""},
        gender : {type : "dropdown" , value:['male','female','trans']},
        wbNo : {type : "text" , value : ""},
        wbEmail : {type : "email" , value : ""},
        wbDOB : {type : "date" , value : ""},
        wardAssi : {type: "number" , value:""},
        salary : {type : 'number' , value : ""}
    }
}
this.updateWardboy = new UpdateWardboySec();
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
        this.updateWardboy.addWardboy(postBody)
        .then(res=>{
            alert(res);
            this.props.history.push('/wardboy');
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
export default AddWardboy;