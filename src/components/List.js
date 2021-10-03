import React, { Component } from 'react'

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {DATA: props.data};
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    {this.state.DATA.employees.map((employee) => {
                        return (
                        <tr style={{border: "20px solid green"}} key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                        </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default List