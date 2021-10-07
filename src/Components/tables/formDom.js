import React from 'react';
import DD from './dropDown';
function FormDom(props){
    const headers = Object.keys(props.body)
return(
<>
{
    headers.map((item,pos)=>{
        if(props.body[item]['type'] == 'dropdown'){
            return(<>
            <label>{item}</label>
            <DD id="genId" val={props.body[item]['value']} select = {props.body[item]['selected']}/><br></br>
            </>)
        }
        else{
            return(<>
            <label>{item}</label>
            <input type={props.body[item]['type']} defaultValue={props.body[item]['value']} className = 'form-control'/><br></br>
            </>)
        }
    })
}
</>);
}
export default FormDom;