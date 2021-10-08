import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateRoomSec from './updateRoomSecureCall';
class  AddRoom extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
    this.state = {
    bodyCompo : {
        roomNo : {type : "number"},
        wardNo : {type : "number" , value : ""},
        roomType : {type : "text"},
        occupied : {type : "text" , value : ""},
        oneDayCharge : {type : "number" , value : ""}
    }
}
this.updateRoom = new UpdateRoomSec();
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
        this.updateRoom.addRoom(postBody)
        .then(res=>{
            alert(res);
            this.props.history.push('/room');
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
export default AddRoom;