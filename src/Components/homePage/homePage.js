import React,{useState,useEffect, Component} from 'react';
import "./homePage.css"
import axios from "axios";
import TaskBar from '../TaskBar/taskbar';
import jwt_decode from "jwt-decode";
// import { render } from 'react-dom';

class HomePage extends Component{
    tokenDesi = sessionStorage.getItem('stPDesi');
    tokenVal = sessionStorage.getItem('Token');
    info = ""
    header= ""
    // const [info,setInfo] = useState()
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // const [response,setResponse] = useState([])
    componentDidMount(prevProp){ 
        if(this.tokenDesi== null || this.tokenVal == null)
        {
            console.log('UnAuthorized Person.');
            return this.props.history.push('/');
        }
        console.log("Updated info:- ",(this.info));
    }
    render()
    {
        if(sessionStorage.getItem('Token')!==null){
        this.info = jwt_decode(this.tokenVal).authVal.dataValues
        this.header = Object.keys(this.info)}
    return(
    <>
    <center>
    <div className="headingDiv"><h1>Homepage</h1></div>
    <div className="mainDiv">
    <div align='left' className="taskClass">
    <TaskBar/>
    </div>
    <div>
    {
     (this.header).length > 0 ?
    <table>
    <tr>
      <th COLSPAN="2">
         <h3><br/>Personal Information</h3>
      </th>
   </tr>
    {
        this.header.map(item=>{
            if(item.includes('Pass')) return
            return(
                <tr>
                    <td><strong>{item}</strong></td><td><strong>{this.info[item]}</strong></td>
                </tr>
            )
        })
    }
    </table> 
     : null
}
    </div>
    </div>
    </center>
    </>
    )
}}
export default HomePage;