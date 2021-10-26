import React,{Component} from "react";
class DetailedBillForm extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        // this.props = props
        this.billInfo = props.location.state
        this.state = {  }
    }
    componentDidMount(prevProp){
        if(this.billInfo === undefined){
            console.log("Undefined");
            this.props.history.push('/homepage')
        }
    }

    // Admit Date: "2021-10-20T00:00:00.000Z"
    // Assigned Doctor: 2
    // Discharge Date: "2021-10-26T00:00:00.000Z"
    // Doctor Name: "Palkesh"
    // Doctor One time Charge: 700
    // Medicine Amount: 66
    // Medicines: Array(2)
    // 0: {patId: 1, medName: 'Crocine', medQuan: 3, totalPrice: 30, id: 1}
    // 1: {patId: 1, medName: 'Disprine', medQuan: 3, totalPrice: 36, id: 2}
    // length: 2
    // [[Prototype]]: Array(0)
    // Patient Id: "1"
    // Room Number: 101
    // Room One Days Charge: 800
    // Total Bill: "042003036"
    // Total Number of Days at Hospital: 6

    render() {
        return ( 
        <>
        <button onClick={()=>{console.log(this.props.history.goBack())}}>Back</button>
        <h1>Detailed Bill of Patient {this.billInfo['Patient Name']}</h1>
        <div>
            {/* <center> */}
            <table className="table table-striped table-dark">
        <tr><td>Patient Id</td><td> {this.billInfo['Patient Id']}</td></tr>
        <tr><td>Patient Name</td><td> {this.billInfo['Patient Name']}</td></tr>
        <tr><td>Room Assigned</td><td> {this.billInfo['Room Number']}</td></tr>
        <tr><td>Doctor Assigned</td><td> {this.billInfo['Assigned Doctor']}</td></tr>
        <tr><td>Doctor Name</td><td> {this.billInfo['Doctor Name']}</td></tr>
        <tr><td>Admitted Date</td><td> {this.billInfo['Admit Date']}</td></tr>
        <tr><td>Discharge Date</td><td> {this.billInfo['Discharge Date']}</td></tr>
        <tr><td>Doctor One day Charge</td><td> {this.billInfo['Doctor One time Charge']}</td></tr>
        <tr><td>Medicine Amount</td><td> {this.billInfo['Medicine Amount']}</td></tr>
        <tr><td>Medicines</td><td>{
            this.billInfo['Medicines'].map(item=>{
                return(<><tr><td>{item['medName']}</td><td>{item['medQuan']}</td></tr></>)
            })
        }</td></tr>
        <tr><td>Room One Days Charge</td><td> {this.billInfo['Room One Days Charge']}</td></tr>
        <tr><td>Total Number of Days at Hospital</td><td> {this.billInfo['Total Number of Days at Hospital']}</td></tr>
        <tr><td>Total Bill</td><td> {this.billInfo['Total Bill']}</td></tr>
        </table>
        {/* </center> */}
        <button onClick={()=>window.print()}>Print</button>
        </div>
        </> );
    }
}
 
export default DetailedBillForm;