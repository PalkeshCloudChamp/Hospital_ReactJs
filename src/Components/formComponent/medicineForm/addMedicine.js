import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateMedicineSec from './updateMedicineSecureCall';
class  AddMedicine extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        medicineId : {type : "number"},
        medName : {type : "text"},
        medType : {type : "text"},
        manuDate : {type : "date"},
        expDate : {type : "date"},
        manufacturer : {type : "text"},
        purDate : {type : "date"},
        price : {type : "number"}
    }
}
this.updateMedicine = new UpdateMedicineSec();
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
        this.updateMedicine.addMedicine(postBody)
        .then(res=>{
            alert(res);
            this.props.history.push('/medicine');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        if(!['Admin','Medical'].includes(sessionStorage.getItem('stPDesi'))){
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
export default AddMedicine;