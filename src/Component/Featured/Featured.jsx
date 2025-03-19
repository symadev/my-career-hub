import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured  = () => {
    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        fetch('./jobs.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    
    },[]);
    
        return (
            <div>
                <h1 className="text-5xl font-bold text-center p-4">Featured Jobs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {
        features.map( job=> <Job job={job} key = {job.jobId}></Job>)
    }
    
    
                </div>
            </div>
        );
};

export default Featured ;