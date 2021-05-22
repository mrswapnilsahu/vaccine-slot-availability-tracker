import { React, useState } from 'react';
import useFetch from '../hooks/useFetch';

function Pin(props) {
    const [pincode, setPincode] = useState('');
    const [date, setDate] = useState('');

    // function fetchDistricts() {
    //     for (let index = 0; index < 40; index++) {
    //         const { data: states_data, isPending, error } = useFetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+index);
    //         data.push(states_data);
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pincode, date);
        // const { data, isPending, error } = useFetch(``);
        console.log(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`);
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
        .then(response => response.json())
        .then(data => props.setData(data));;
        console.log(props.data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="columns col-oneline">
                    <div className="column col-4">
                        <div className="form-group">
                            <label className="form-label">Pincode</label>
                            <input className="form-input" type="text" id="input-example-1" placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)} />
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

export default Pin;
