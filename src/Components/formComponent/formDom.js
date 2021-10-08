import React from 'react';
import DD from './dropDown';
import RadioDOM from './radioDom';
function FormDom(props){
    const headers = Object.keys(props.body)
    // console.log(props.body['gender']['select']);
    console.log(props);
return(
<>
{/* <button value="Cancel" onClick={}>Cancel</button> */}
{
    headers.map((item,pos)=>{
        if(props.body[item]['type'] == 'dropdown'){
            return(<>
            <label>{props.body[item]['label'] == undefined ? item : props.body[item]['label']}</label>
            <DD id="genId" val={props.body[item]['value']} label={item} className="FormClass" selected = {props.body[item]['select']}/><br></br>
            </>)
        }
        else if(props.body[item]['type'] == "radio"){
            return(<>
                <label>{props.body[item]['label'] == undefined ? item : props.body[item]['label']}</label>
                <RadioDOM value={props.body[item]['value']} label={item} className="FormClass" name={props.body[item]['name']} select={props.body[item]['select']}/></>
            )
        }
        else{
            return(<>
            <label>{props.body[item]['label'] == undefined ? item : props.body[item]['label']}</label>

            {
            props.body[item]['readonly'] == undefined || props.body[item]['readonly'] == "false" ? 
            <><input type={props.body[item]['type']} defaultValue={props.body[item]['value']} className = 'form-control FormClass'/><br></br></> 
            : 
            <><input type={props.body[item]['type']} value={props.body[item]['value']} className = 'form-control FormClass'/><br></br></>
            }
            </>)
        }
    })
}
</>);
}
export default FormDom;