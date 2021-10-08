import axios from "axios";

class UpdateRoomSec{
    updateRoom(data,id){
        let response = axios.put(`http://localhost:9080/api/updateRoom/${id}`,data , {
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
    addRoom(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addRoom` , data,{
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
}
export default UpdateRoomSec;