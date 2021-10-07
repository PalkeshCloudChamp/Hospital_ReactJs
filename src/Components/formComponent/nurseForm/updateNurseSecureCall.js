import axios from "axios";

class UpdateNurseSec{
    updateNurse(data,id){
        let response = axios.put(`http://localhost:9080/api/updateNurse/${id}`,data , {
            headers : {
                'Content-Type' : "application/json"
            }
        })
        return response;
    }
    addNurse(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addNurse` , data)
        return response;
    }
}
export default UpdateNurseSec;