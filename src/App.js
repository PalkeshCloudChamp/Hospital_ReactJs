import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './Components/homePage/homePage';
import Register from './Components/Register/register';
// import TaskBar from './Components/TaskBar/taskbar';
import Login from './Components/Login/login';
import DoctorTable from './Components/tables/doctorTable';
import PatientTable from './Components/tables/patientTable';
import WardboyTable from './Components/tables/wardboyTable';
import NurseTable from './Components/tables/nurseTable';
import UpdateDoc from './Components/formComponent/doctorForm/docFormUpdate';
import AddDoc from './Components/formComponent/doctorForm/addDoc';
import UpdatePat from './Components/formComponent/patientForm/patientFormUpdate';
import AddPat from './Components/formComponent/patientForm/addPatient';
import UpdateNurse from './Components/formComponent/nurseForm/nurseFormUpdate';
import AddNurse from './Components/formComponent/nurseForm/addNurse';
import UpdateWardboy from './Components/formComponent/wardboyForm/wardboyFormUpdate';
import AddWardboy from './Components/formComponent/wardboyForm/addWardboy';
import StaffTable from './Components/tables/staffTable';
import UpdateStaff from './Components/formComponent/staffForm/staffFormUpdate';
import AddStaff from './Components/formComponent/staffForm/addStaff';
// import FormDom from './Components/formComponent/formDom';
// import TestingFormDom from './Components/testing_folder/test'
class App extends Component {
  // pages = ['Patient','Doctor','Staff','Nurse','Wardboy','Ward']
  constructor(props){
    super(props);
    this.state = {  };
  }
  render(){return (
    <div>
      <Switch>
        <Route exact path="/" component = {Login}></Route>
        <Route exact path="/homepage" component = {HomePage}></Route>
        <Route exact path="/doctor" component = {DoctorTable}></Route>
        <Route exact path="/register" component = {Register}></Route>
        <Route exact path="/patient" component = {PatientTable}></Route>
        <Route exact path="/nurse" component = {NurseTable}></Route>
        <Route exact path="/wardboy" component = {WardboyTable}></Route>
        <Route exact path="/staff" component = {StaffTable}></Route>
        <Route exact path="/updateDoc" component = {UpdateDoc}></Route>
        <Route exact path="/addDoc" component = {AddDoc}></Route>
        <Route exact path="/updatePatient" component = {UpdatePat}></Route>
        <Route exact path="/addPatient" component = {AddPat}></Route>
        <Route exact path="/updateNurse" component = {UpdateNurse}></Route>
        <Route exact path="/addNurse" component = {AddNurse}></Route>
        <Route exact path="/updateWardboy" component = {UpdateWardboy}></Route>
        <Route exact path="/addWardboy" component = {AddWardboy}></Route>
        <Route exact path="/updateStaff" component = {UpdateStaff}></Route>
        <Route exact path="/addStaff" component = {AddStaff}></Route>
        <Redirect to="/"></Redirect> 
       </Switch>
    </div>

  );}
}

export default App;