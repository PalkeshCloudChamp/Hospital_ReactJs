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
            let response =  axios.delete(`${deleteLink}/${id}`);
            return response
    }
} 