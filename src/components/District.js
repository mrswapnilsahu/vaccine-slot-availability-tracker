import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

function District() {

    const [date, setDate] = useState('')

    const { data: states_data, isPending, error } = useFetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(pincode, date);
        // const { data, isPending, error } = useFetch(``);
        // fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${}&date=${}`)
        //     .then(response => response.json())
        //     .then(data => props.setData(data));;
        // console.log(props.data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="columns col-oneline">
                    <div className="column col-4">
                        <div className="form-group">
                            <label className="form-label">State</label>
                            {isPending && <div>Loading...</div>}
                            {states_data &&
                                <select className="form-select">
                                    <option>Choose an option</option>
                                    {states_data.states.map((sd) =>
                                        <option key={sd.state_id}>{sd.state_name}</option>
                                    )}
                                </select>
                            }
                        </div>
                    </div>
                    <div className="column col-4">
                        <div className="form-group">
                            <label className="form-label">Date</label>
                            <input className="form-input" type="date" id="input-example-1" onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    {/* <div className="column col-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label className="form-label">District</label>
                             {isPending && <div>Loading...</div>}
                                    {states_data &&
                                        <select className="form-select">
                                            <option>Choose an option</option>
                                            {states_data.states.map((sd) =>
                                                <option key={sd.state_id}>{sd.state_name}</option>
                                            )}
                                        </select>
                                    }
                        </div>
                    </div>
                </div> */}
                    <div className="column col-4">
                        <div className="form-group">
                            <label className="form-label"></label><br />
                            <button className="btn btn-primary btn-block">Check</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default District;
