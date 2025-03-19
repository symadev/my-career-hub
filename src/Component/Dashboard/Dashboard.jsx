import { useEffect, useState } from "react";
import Dash from "../Dash/Dash";

const Dashboard = () => {
    const [dashes, setDash] = useState([]);

    useEffect(()=>{
        fetch('./jobs.json')
        .then(res=>res.json())
        .then(data=>setDash(data))
    
    },[]);
    
        return (
            <div>
                <h1 className="text-5xl font-bold text-center p-4">All My Job Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
    {
        dashes.map( dash=> <Dash dash={dash} key = {dash.dashId}></Dash>)
    }
    
    
                </div>
            </div>
        );
};

export default Dashboard;