
import { useLocation } from "react-router-dom";




const JobDetails = () => {
    const location = useLocation();
  const { job } = location.state || {};

  if (!job) return <p>Job details not found</p>;

  return (
    <div className="flex items-center justify-center min-h-[300px] bg-white">
  <div className="w-full max-w-2xl p-6 bg-white text-black shadow-xl rounded-lg">
    <figure className="px-10 pt-10">
      <img
        src={job.logo}
        alt="Job Logo"
        />
    </figure>
    <h1 className="text-3xl font-bold">{job.job_title}</h1>
    <p className="text-lg">{job.company_name}</p>
    <p>{job.location}</p>
    <p className="text-md">{job.job_description}</p>
    <p className="text-md font-semibold">Salary: {job.salary}</p>
    <p className="text-md font-semibold">Job Type: {job.job_type}</p>
  </div>
</div>

  
  );
};

export default JobDetails;