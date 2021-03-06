import axios from "axios";

class UpdateStaffSec{
    updateStaff(data,id){
        let response = axios.put(`http://localhost:9080/api/updateStaff/${id}`,data , {
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
    addStaff(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addStaff` , data,{
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
}
export default UpdateStaffSec;