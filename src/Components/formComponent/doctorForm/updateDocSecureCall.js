import axios from "axios";

class UpdateDocSec{
    updateDoc(data,id){
        let response = axios.put(`http://localhost:9080/api/updateDoctor/${id}`,data , {
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
    addDoc(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addDoctor` , data, {
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
}
export default UpdateDocSec;