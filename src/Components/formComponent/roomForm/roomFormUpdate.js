import React, { Component } from 'react';
import FormDom from '../formDom';
import UpdateRoomSec from './updateRoomSecureCall';
class  UpdateRoom extends Component{
    // info = props.location.sta.info.data.value;
    constructor(props){
        super(props);
        this.info = props.location.state;
        console.log(this.info);
    this.state = {
    bodyCompo : {
        roomNo : {type : "number",readonly : "true", value : this.info['roomNo']},
        wardNo : {type : "number" , value : this.info['wardNo']},
        roomType : {type : "text",value : this.info['roomType']},
        occupied : {type : "text" , value : this.info['occupied']},
        oneDayCharge : {type : "number" , value : this.info['oneDayCharge']},
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
        this.updateRoom.updateRoom(postBody ,parseInt(postBody['roomNo']))
        .then(res=>{
            alert("Room Updated");
            this.props.history.push('/Room');
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
export default UpdateRoom;