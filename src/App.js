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
import WardTable from './Components/tables/wardTable';
import RoomTable from './Components/tables/roomTable';
import AddRoom from './Components/formComponent/roomForm/addRoom';
import UpdateRoom from './Components/formComponent/roomForm/roomFormUpdate';
import MedicineTable from './Components/tables/medicineTable';
import AddMedicine from './Components/formComponent/medicineForm/addMedicine';
import UpdateMedicine from './Components/formComponent/medicineForm/medicineFormUpdate';
import BillTable from './Components/tables/billTable';
import MedicineBillTable from './Components/tables/medicineBillTable';
import AddMedicineBill from './Components/formComponent/medicineBillForm/addMedicineBill';
import DetailedBillForm from './Components/formComponent/medicineBillForm/detailedBillForm';
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
        <Route exact path="/addStaff" component = {Register}></Route>
        <Route exact path="/ward" component = {WardTable}></Route>
        <Route exact path="/room" component = {RoomTable}></Route>
        <Route exact path="/addRoom" component = {AddRoom}></Route>
        <Route exact path="/updateRoom" component = {UpdateRoom}></Route>
        <Route exact path="/medicine" component={MedicineTable}></Route>
        <Route exact path="/addMedicine" component = {AddMedicine}></Route>
        <Route exact path="/updateMedicine" component = {UpdateMedicine}></Route>
        <Route exact path="/bill" component={BillTable}></Route>
        <Route exact path="/medicineBill" component={MedicineBillTable}></Route>
        <Route exact path="/addMedicineBill" component={AddMedicineBill}></Route>
        <Route exact path="/detailedBill" component={DetailedBillForm}></Route>
        <Redirect to="/"></Redirect> 
       </Switch>
    </div>

  );}
}

export default App;
