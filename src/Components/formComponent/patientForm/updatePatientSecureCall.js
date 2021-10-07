import axios from "axios";

class UpdatePatSec{
    updatePat(data,id){
        let response = axios.put(`http://localhost:9080/api/updatePatient/${id}`,data , {
            headers : {
                'Content-Type' : "application/json"
            }
        })
        return response;
    }
    addPat(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addPatient` , data)
        return response;
    }
}
export default UpdatePatSec;