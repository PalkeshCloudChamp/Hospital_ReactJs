import React,{Component} from "react";
import "./taskbar.css"
class TaskBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tables : ["Admin",'Doctor','Nurse','Wardboy','Staff','Homepage','Room'],
            tableLinks : {
                Homepage : "/homepage",
                Doctor : "/doctor",
                Nurse : "/nurse",
                Wardboy : "/wardboy",
                Staff : "/staff",
                Patient : "/patient",
                Room : "/room"
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
            this.setState({tables : ["Homepage",'Patient' ,'Doctor','Nurse','Wardboy','Staff','Room']})
        }
        else if(Desi == 'Doctor'){
            this.setState({tables : ['Homepage','Patient' ,'Nurse','Wardboy','Room']})
        }
        else if(Desi == 'Nurse'){
            this.setState({tables : ["Homepage",'Patient' ,'Doctor','Wardboy','Room']})
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