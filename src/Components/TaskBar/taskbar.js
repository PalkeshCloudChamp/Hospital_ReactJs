import React,{Component} from "react";
import "./taskbar.css"
class TaskBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tables : ["Admin",'Doctor','Nurse','Wardboy','Staff','Homepage','Room','Medicine','Bill',"MedicineBill"],
            tableLinks : {
                Homepage : "/homepage",
                Doctor : "/doctor",
                Nurse : "/nurse",
                Wardboy : "/wardboy",
                Staff : "/staff",
                Patient : "/patient",
                Room : "/room",
                Medicine : "/medicine",
                Bill : "/bill",
                MedicineBill : "/medicineBill"
            }
         }
    }
    logoutFunction = evt =>{
        sessionStorage.clear()
    }
    componentDidMount(prevProp){
        let token = sessionStorage.getItem('Token')
        let Desi = sessionStorage.getItem('stPDesi')
        console.log("Your Designation:- " , Desi);
        if(Desi == 'Admin'){
            this.setState({tables : ["Homepage",'Patient' ,'Doctor','Nurse','Wardboy','Staff','Room','Medicine','Bill',"MedicineBill"]})
        }
        else if(Desi == 'Doctor'){
            this.setState({tables : ['Homepage','Patient' ,'Nurse','Wardboy']})
        }
        else if(Desi == 'Nurse'){
            this.setState({tables : ["Homepage",'Patient' ,'Doctor','Wardboy','Room']})
        }
        else if(Desi == 'Management'){
            this.setState({tables : ["Homepage",'Patient' ,'Doctor','Wardboy','Room','Bill']})
        }
        else if(Desi == 'Medical'){
            this.setState({tables : ["Homepage","Patient",'Medicine',"MedicineBill"]})
        }
        else{
            this.setState({tables : []})
        }
    }
    render() { 
        return (
        <nav className="navbar navbar-dark">
                <ul>
                    {
                    this.state.tables.map(item=>{
                        return(
                        <>
                            <li><a className = "active list-group-item"href={this.state.tableLinks[item]}>{item}</a></li>
                        </>)
                    })
                    
                }
                <li><a className = "active list-group-item"href="/" onClick={this.logoutFunction.bind(this)}>Logout</a></li>
                </ul>
        </nav>
        );
    }
}
 

export default TaskBar;