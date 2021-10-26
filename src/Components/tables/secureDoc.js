import axios from "axios";

export class SecureDoc{
    getData(getLink){
        let response =  axios.get(getLink,{
            headers : {
                Authorization : sessionStorage.getItem('Token')
            }
        });
        return response
    }
    deleteData(deleteLink , id){
            let response =  axios.delete(`${deleteLink}/${id}`,{
                headers : {
                    Authorization : sessionStorage.getItem('Token')
                }
            });
            return response
    }
    dischargePatient(id){
        let response = axios.put(`http://localhost:9080/api/dischargePatient/${id}`);
        let res = axios.get(`http://localhost:9080/api/generateBill/${id}`).then(resp=>{
            axios.post(`http://localhost:9080/api/addBill`,resp)
        }
        )
        // alert(response)
        console.log("Discharged Patient:- ",id);
    }
    getDetailedBill(id){
        let res = axios.get(`http://localhost:9080/api/generateBill/${id}`)
        console.log(res);
        return res
    }
} 