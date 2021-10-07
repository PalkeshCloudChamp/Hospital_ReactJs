import React, { Component } from "react";
import FormDom from "./formDom";
import { SecureDoc } from "./secureDoc";
import './table.css'
class TableDom extends Component {
    state = {
        data: this.props.body,
        dataCopy: this.props.body,
        headers: this.props.headers,
        pagingArr: ['1'],
        pageSize: this.props.body.length,
        showPagi: this.props.showPagi === undefined ? true : this.props.showPagi,
        showDelete: this.props.showDelete === undefined ? true : this.props.showDelete,
        showUpdate: this.props.showUpdate === undefined ? true : this.props.showUpdate,
    }
    sc = new SecureDoc();
    deleteEle = evt => {
        console.log(evt.target.value);
        this.sc.deleteData( this.props.link,parseInt(evt.target.value)).then(res => {
            this.sc.getData(this.props.getLink).then(re => {
                this.setState({ data: re.data.value })
                this.setState({ dataCopy: re.data.value })
                console.log(this.state.data);
            })
        })
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

    updateOnClick(data){
        this.props.props.history.push({
            pathname : this.props.updateURL,
            state : data
        });  
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
                <div id="addBtn">
                <a href={ this.props.addURL } class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-plus-sign"></span> Add
                </a></div>
                <table className="table table-striped">
                    <thead><tr>
                        {
                            this.props.headers.map((item, pos) => {
                                return (
                                    <th>
                                        <a href="#" onClick={this.sortOnThis} value={item} > {item}</a>
                                    </th>
                                )
                            })
                        }
                        {this.state.showUpdate ? <th>Update</th> : null}
                        {this.state.showDelete ? <th>Delete</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item, pos) => {
                                return (<tr onClick={() => this.getValues(item)}>
                                    {this.props.headers.map((it, po) => {
                                        return (
                                            <td>{item[it]}</td>
                                        )
                                    }
                                    )}
                                    {this.state.showUpdate ? <td> <button value={item} onClick={()=>this.updateOnClick(item)}>Update</button></td> : null}
                                    {this.state.showDelete ? <td> <button value={item[this.props.pkId]} onClick={this.deleteEle}>Delete</button></td> : null}
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* <div className="container" style={{ textAlign: 'right', size : "24px" }}> */}
                {/* </div> */}
            </>
        );
    }
}

export default TableDom;