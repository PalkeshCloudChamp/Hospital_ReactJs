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
        let response = axios.post(`http://localhost:9080/api/addMedicineBill` , data,{
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : sessionStorage.getItem('Token')
            }
        })
        return response;
    }
    async getPrescription(id){
        let response =await axios.get(`http://localhost:9080/api/showOnePatient/${id}`)
        return response
    }
    async getMedicines(id){
        let response = await axios.get(`http://localhost:9080/api/showMedicine`)
        return response
    }
    
}
export default UpdateMedicineSec;