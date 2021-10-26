import React, { Component } from "react";
import FormDom from "./formDom";
import { SecureDoc } from "./secureDoc";
import './table.css'
class AdmittedPatient extends Component {
    state = {
        data: "",
        dataCopy: "",
        pagingArr: ['1'],
        headers : "",
        pageSize: "",
        showPagi: this.props.showPagi === undefined ? true : this.props.showPagi,
        showDelete: this.props.showDelete === undefined ? true : this.props.showDelete,
    }
    // headers = this.state.data === undefined ? "" : Object.keys(this.state.data)
    sc = new SecureDoc();
    deleteEle (val) {
        console.log(val['patId']);
        // this.sc.deleteData( `http://localhost:9080/api/dischargePatient`,parseInt(val['patId'])).then(res => {
            this.sc.getData("http://localhost:9080/api/showAdmittedPatient").then(re => {
                this.setState({ data: re.data.value })
                this.setState({ dataCopy: re.data.value })
                console.log(this.state.data);
            })
                this.sc.dischargePatient(val['patId'])
            // )
        // })
    }
    sortOnThis = evt => {
        this.setState((prevState, prevProp) => {
            let temp = prevState.data
            console.log(evt.target.innerText)
            // prevState.data.sort((a,b)=>a[JSON.stringify(evt.target.innerHTML)] > b[JSON.stringify(evt.target.innerHTML)] ? 1 : -1)
            console.log(temp.sort((a, b) => (a[evt.target.innerText] > b[evt.target.innerText]) ? 1 : -1))
            return ({ data: temp });
        })
    }

    getValues = (items) => {
        console.log(items);
    }

    updatePagingArr = evt => {
        let temp = []
        if (evt.target.value == "") return;
        for (let i = 1; i <= Math.ceil(this.state.dataCopy.length / evt.target.value); i++) {
            temp.push(i)
        }
        this.setState({ pagingArr: temp, pageSize: evt.target.value });
    }

    changeDataValue = evt => {
        // evt.target.innerText
        let temp = []
        let strInd = (parseInt(evt.target.innerText) - 1) * (parseInt(this.state.pageSize))
        console.log(parseInt(this.state.pageSize))
        for (let i = strInd; i < strInd + parseInt(this.state.pageSize); i++) {
            if (this.state.dataCopy[i] === undefined) {
                break
            }
            temp.push(this.state.dataCopy[i])
        }
        console.log(temp);
        this.setState({ data: temp });
    }
    componentDidMount(prevProp){
        this.sc.getData(`http://localhost:9080/api/showAdmittedPatient`).then(resp=>{
            this.setState({data : resp.data.value})
            this.setState({dataCopy : resp.data.value})
            this.setState({headers : Object.keys(resp.data.value[0])})
            this.setState({pageSize : resp.data.value.length})
            console.log("This.State.Data" , this.state.data);
            console.log(this.state.headers);
        }).catch(err=>{
            console.log(err);
            // this.props.history.push('/homepage')
        })
        // console.log(this.props.body);
    }
    render() {
        return (
            <>{this.state.showPagi ?
                <div>
                    {/* Pagination Block */}
                    Enter the number of Rows in one Page:-
                    <input type='number' placeholder='Enter table size' min='1' max={this.state.dataCopy.length} onChange={this.updatePagingArr}></input><br />
                    {
                        this.state.pagingArr.map((item, pos) => {

                            return (<li style={{ display: "inline-block" }}><ul className='pagination' style={{ display: "inline-block", padding: "10px" }}><a href="#" style={{ display: "inline-block" }} className="page-item" onClick={this.changeDataValue}>  {item}   </a></ul></li>)
                        })

                    }
                </div> : null}
                {/* <div id="addBtn">
                { this.props.showAdd === undefined?
                <a href={ this.props.addURL } class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-plus-sign"></span> Add
                </a> : this.props.showAdd ? <a href={ this.props.addURL } class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-plus-sign"></span> Add
                </a> : null
                }</div> */}
                {this.state.headers.length > 0 ? 
                <table className="table table-striped">
                    <thead><tr>
                        {
                            this.state.headers.map((item, pos) => {
                                return (
                                    <th>
                                        <a href="#" onClick={this.sortOnThis} value={item} > {item}</a>
                                    </th>
                                )
                            })
                        }
                        {this.state.showDelete ? <th>Delete</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item, pos) => {
                                return (<tr onClick={() => this.getValues(item)}>
                                    {this.state.headers.map((it, po) => {
                                        return (
                                            <td>
                                                {typeof(item[it]) === 'boolean' ? item[it].toString() : item[it]}
                                            </td>
                                        )
                                    }
                                    )}
                                    {this.state.showDelete ? <td> <button onClick={()=>this.deleteEle(item)}>Discharge</button></td> : null}
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                : null
    }
            </>
        );
    }
}

export default AdmittedPatient;