import axios from "axios";

class UpdateMedicineSec{
    updateMedicine(data,id){
        let response = axios.put(`http://localhost:9080/api/updateMedicine/${id}`,data , {
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
    addMedicine(data){
        console.log("The data:- " , data);
        let response = axios.post(`http://localhost:9080/api/addMedicine` , data,{
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
}
export default UpdateMedicineSec;