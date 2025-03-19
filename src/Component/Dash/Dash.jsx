import React from 'react';

const Dash = ({dash}) => {
    const {logo,job_title,company_name,educational_requirements,job_responsibility,experiences} =dash;
    return (
        <div className="card bg-slate-400 w-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={logo}
            alt="Shoes"
            className="w-56" />
        </figure>
        <div className="card-body items-center text-black text-center">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <p>{educational_requirements}</p>
          <p className="text-xs">{job_responsibility}</p>
          <div className="card-actions  text-black justify-end">
      <div className="badge badge-outline">{experiences}</div>
   
    </div>

          <div className="card-actions">
          <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>See Details</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box text-white">
    <h3 className="font-bold text-lg">{job_title}</h3>
    <p className="py-4">{experiences}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-accent">Close</button>
      </form>
    </div>
  </div>
</dialog>
          </div>
        </div>
      </div>
    );
};

export default Dash;