import React from 'react';
import FormDom from '../formComponent/formDom';
function TestingFormDom(){
    let bodyCompo = {
        name : {type : "text" , value : "palkesh", label : "Name"},
        gender : {type : "dropdown" , value:['male','female','trans'],select : "male"},
        nothing : {type : "radio" ,value : ['1','2','3'], select : "2"}
    }
    return (<FormDom body={bodyCompo}/>);
}
export default TestingFormDom;