

const Job = ({job}) => {
    const {logo,job_title,company_name,location,job_description,salary,job_type} = job;
    return (
        <div className="card bg-base-100 w-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={logo}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <p>{location}</p>
          <p className="text-xs">{job_description}</p>
          <div className="card-actions justify-end">
      <div className="badge badge-outline">{salary}</div>
    <div className="badge badge-outline">{job_type}</div>
    </div>

          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;