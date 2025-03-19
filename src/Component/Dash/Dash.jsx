import React from "react";

const Dash = ({ dash }) => {
  const {
    logo,
    job_title,
    company_name,
    educational_requirements,
    job_responsibility,
    experiences,
  } = dash;

  // Generate a unique modal ID for each job card
  const modalId = `modal_${job_title.replace(/\s+/g, "_").toLowerCase()}`;

  return (
    <div className="card bg-slate-400 w-50 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Company Logo" className="w-56" />
      </figure>
      <div className="card-body items-center text-black text-center">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <p>{educational_requirements}</p>
        <p className="text-xs">{job_responsibility}</p>
        <div className="card-actions text-black justify-end">
          <div className="badge badge-outline">{experiences}</div>
        </div>

        {/* Open Modal with Dynamic ID */}
        <div className="card-actions">
          <a href={`#${modalId}`} className="btn">
            See Details
          </a>
        </div>
      </div>

      {/* Modal with Dynamic ID */}
      <div className="modal" role="dialog" id={modalId}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">{job_title}</h3>
          <p className="py-4">{experiences}</p>
          <div className="modal-action">
            <a href="#" className="btn">
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
