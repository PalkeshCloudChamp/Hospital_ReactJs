import React from 'react';
import DD from './dropDown';
import RadioDOM from './radioDom';
import { useHistory } from "react-router-dom";
import InputDom from './inputDom';
function FormDom(props){
    const headers = Object.keys(props.body)
    // console.log(props.body['gender']['select']);
    let validated = true
    console.log(props);
    let history = useHistory();
return(
<>
<button value="Cancel" onClick={() => {history.goBack()}}>Cancel</button>
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
            <>
            {/* <input type={props.body[item]['type']} defaultValue={props.body[item]['value']} pattern={props.body[item]['pattern']} onChange={(evt)=>{
                var mailformat = new RegExp(props.body[item]['pattern']);
                console.log(mailformat.test(evt.target.value));
                if(mailformat.test(evt.target.value)){
                    console.log("Pattern Match");
                }
            }} className = 'form-control FormClass'/><br></br>
            <div></div> */}
            <InputDom pattern = {props.body[item]['pattern']} type={props.body[item]['type']} value={props.body[item]['value']}/>
            </> 
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