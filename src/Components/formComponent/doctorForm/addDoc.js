import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateDocSec from './updateDocSecureCall';
class  AddDoc extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        docId : {type : "number" , value : ""},
        docName : {type : "text" , value : "",pattern : ".{3,}"},
        gender : {type : "dropdown" , value:['male','female','trans']},
        docNo : {type : "text" , value : ""},
        docEmail : {type : "email" , value : "",pattern : "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"},
        docDOB : {type : "date" , value : ""},
        charge : {type : "number" , value : ""},
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
        this.updateDoc.addDoc(postBody)
        .then(res=>{
            alert(res);
            // console.log(this.props.history.push('/doctor'));
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        if(sessionStorage.getItem('stPDesi') !== "Admin"){
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
export default AddDoc;