import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateMedicineSec from './updateMedicineSecureCall';
class  UpdateMedicine extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        medicineId : {type : "number",readonly : "true", value : this.info['medicineId']},
        medName : {type : "text", value : this.info['medName']},
        medType : {type : "text", value : this.info['medType']},
        manuDate : {type : "date", value : this.info['manuDate']},
        expDate : {type : "date", value : this.info['expDate']},
        manufacturer : {type : "text", value : this.info['manufacturer']},
        purDate : {type : "date", value : this.info['purDate']},
        price : {type : "number", value : this.info['price']},
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
        this.updateMedicine.updateMedicine(postBody ,parseInt(postBody['medicineId']))
        .then(res=>{
            alert("Medicine Updated");
            this.props.history.push('/medicine');
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
export default UpdateMedicine;