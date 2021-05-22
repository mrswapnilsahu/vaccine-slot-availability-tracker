import React, { useState } from 'react';
// import useFetch from '../hooks/useFetch';
import Pin from './Pin';
import District from './District';
import Table from './Table';

function Home() {
    const [data, setData] = useState({});
    // const data = [];
    // function fetchDistricts() {
    //     for (let index = 0; index < 40; index++) {
    //         const { data: states_data, isPending, error } = useFetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+index);
    //         data.push(states_data);
    //     }
    // }

    // console.log(states_data)
    const [view, setview] = useState("Pin")
    console.log(data);
    return (
        <div className="w-80">
            <div className="card">
                <div className="card-header">
                    {/* <div className="card-title h5">Test</div> */}
                    <div className="btn-group btn-group-block">
                        <button className={`btn ${(view === "Pin")?"active":""}`} onClick={()=>setview("Pin")}>Search By Pin</button>
                        <button className={`btn  ${(view === "District")?"active":""}`} onClick={()=>setview("District")}>Search By District</button>
                    </div>
                </div>
                <div className="card-body">
                    {(view === "Pin") ? <Pin data={data} setData={setData}/> : <District />}
                </div>
            </div>
            <div className="card mt-2">
                <Table data={data}/>
            </div>
        </div>
    )
}

export default Home;
