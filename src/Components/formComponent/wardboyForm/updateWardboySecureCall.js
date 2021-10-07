import axios from "axios";

class UpdateWardboySec{
    updateWardboy(data,id){
        let response = axios.put(`http://localhost:9080/api/updateWardboy/${id}`,data , {
            headers : {
                'Content-Type' : "application/json"
            }
        })
        return response;
    }
    addWardboy(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addWardboy` , data)
        return response;
    }
}
export default UpdateWardboySec;