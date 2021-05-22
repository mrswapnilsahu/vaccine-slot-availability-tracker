import React from 'react'

function Table(props) {
    const { sessions } = props.data;
    console.log(sessions);
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Vaccine</th>
                        <th>Age Limit</th>
                        <th>Capacity</th>
                        <th>Slots</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions && <>
                        {sessions.sessions.map((test) => (
                            <tr className="active">
                                <td>20-05-2021</td>
                                <td>{test.name}</td>
                                <td>COVAXIN</td>
                                <td>45+</td>
                                <td>54<br />(Dose1:24 Dose2:30)</td>
                                <td>09:00:00-18:00:00</td>
                                <td><span className="badge p-4 btn-danger" data-badge="Booked"></span></td>
                            </tr>
                        ))}</>}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
