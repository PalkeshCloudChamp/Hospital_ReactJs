import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateDocSec from './updateDocSecureCall';
class  UpdateDoc extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        docId : {type : "number" , value : this.info['docId'], label : "DocId" , readonly : "true"},
        docName : {type : "text" , value : this.info['docName']},
        gender : {type : "dropdown" , value:['male','female','trans'],select : "male"},
        docNo : {type : "text" , value : this.info['docNo']},
        docEmail : {type : "email" , value : this.info['docEmail']},
        docNo : {type : "date" , value : this.info['docDOB']},
    }
}
this.updateDoc = new UpdateDocSec();
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
        this.updateDoc.updateDoc(postBody ,parseInt(postBody['docId']))
        .then(res=>{
            alert(res);
            this.props.history.push('/doctor');
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
export default UpdateDoc;