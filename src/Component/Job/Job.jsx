import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
    const navigate = useNavigate();

    const handleButton = ()=>{
        navigate(`/job/${id}`, { state: { job } });




        
    }
    const {logo,job_title,company_name,location,job_description,salary,job_type,id} = job;
    return (
        <div className="card bg-slate-50 w-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={logo}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-black text-center">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <p>{location}</p>
          <p className="text-xs">{job_description}</p>
          <div className="card-actions  text-black justify-end">
      <div className="badge badge-outline">{salary}</div>
    <div className="badge badge-outline">{job_type}</div>
    </div>

          <div className="card-actions">
            <button  onClick = {handleButton}className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;