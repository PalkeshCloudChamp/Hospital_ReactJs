import React, { Component, useEffect, useState } from 'react';
import FormDom from '../formDom';
import UpdateMedicineSec from './updateMedicineSecureCall';
import { useHistory } from "react-router-dom";
import InputDom from '../inputDom';
import axios from 'axios';
import "./medicineBill.css"
function  AddMedicineBill(props){
let updateMedicine = new UpdateMedicineSec();
const  [medPrice,setMedPrice] = useState()
const [data,setData] = useState()
const [medName , setMedName] = useState()
const [prescription,setPrescription] = useState(null)
    let history = useHistory();
        if(!['Admin','Medical'].includes(sessionStorage.getItem('stPDesi'))){
            this.props.history.push('/homepage')
        }
//         useEffect(()=>{
//             axios.get("http://localhost:9080/api/showMedicine").then(res=>{
//     setData({data : res.data.value})
// })

//         });
        const getPatientPrescription=()=>{
            let obj = new UpdateMedicineSec()
            obj.getPrescription(document.getElementById("searchId").value).then(resp=>{
                setPrescription(resp.data.value['prescription'])
                obj.getMedicines().then(re=>{
                    let temp = []
                    let medPric = []
                    re.data.value.map(item=>{
                        medPric[item['medName']] = item['price']
                        temp.push(item['medName'])
                    })
                    setMedName(temp);
                    setMedPrice(medPric)
                    console.log(medPrice);
                })
            }).catch(err=>{
                alert(err)
            })
        }

        const submitButton = ()=>{
            let obj = new UpdateMedicineSec()
            let finalMedicineData = []
            let checkBoxes = document.getElementsByName('medicineName')
            let len = checkBoxes.length
            console.log(len);
            let i = 0
            for(i = 0 ; i < len ; i++){
                if(checkBoxes[i].checked){
                    let temp = {}
                    // console.log(medPrice);
                    temp.medName = checkBoxes[i].value
                    temp.medQuan = document.getElementById(checkBoxes[i].value).value
                    temp.patId = document.getElementById("searchId").value
                    temp.totalPrice = parseInt(document.getElementById(checkBoxes[i].value).value) * parseInt(medPrice[checkBoxes[i].value])
                    console.log(temp);
                    finalMedicineData.push(temp)
                }
            }
            // console.log(finalMedicineData);
            finalMedicineData.map(item=>{
                console.log(item);
                obj.addMedicine(item)
            })
            history.goBack()
        }


        return (
            <>
            <div id="mainId">
            <button value="Cancel" onClick={() => {history.goBack()}}>Cancel</button>
            <div id="baseDiv">
            <label>Enter Patient Id</label><br/>
            <input id="searchId" min="0" type="number"/>
            <button id="searchBtn" onClick={getPatientPrescription}>Get Prescription</button>
            </div>
            <div id="pres">
                {
                    prescription !== null?
                    <><center>
                        <h3>{prescription}</h3>
                    </center>
                    {
                        medName !== undefined ? 
                        <>
                        {
                            medName.map(item=>{
                                return(
                                    <div>
                                        <center>
                                        <input id="checkboxDiv" type="checkbox" name="medicineName" value={item}/><label for="medicineName">{item}</label>
                                        <input type="number" min="0" defaultValue="0" placeholder="Quantity" id={item} name="quatity"/>
                                    </center>
                                    </div>
                                )
                            })
                        }
                        <button type="submit" onClick={submitButton} value="Submit">Submit</button>
                        </>
                        : null
                    }</>
                    :null
                }
            </div>
            </div>
            </>
        );
    }
export default AddMedicineBill;
