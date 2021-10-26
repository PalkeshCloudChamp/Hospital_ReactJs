import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateWardboySec from './updateWardboySecureCall';
class  UpdateWardboy extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        wbId : {type : "number" , value : this.info['wbId'], label : "wbId" , readonly : "true"},
        wbName : {type : "text" , value : this.info['wbName']},
        gender : {type : "dropdown" , value:['Male','Female','Trans'],select : this.info['gender']},
        wbNo : {type : "text" , value : this.info['wbNo']},
        wbEmail : {type : "email" , value : this.info['wbEmail'],pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"},
        wbDOB : {type : "date" , value : this.info['wbDOB']},
        wardAssi : {type : "number" , value : this.info['wardAssi']},
        salary : {type : 'number' , value : this.info['salary']}
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
        this.updateWardboy.updateWardboy(postBody ,parseInt(postBody['wbId']))
        .then(res=>{
            alert("Wardboy Updated");
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
export default UpdateWardboy;