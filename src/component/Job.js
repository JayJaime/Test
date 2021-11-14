import React from "react";
// How do we pass our props in
export default function Job({ data }) {
  const applyNow = () => {
    // How can you open a new window with the link to job applicayion?
    window.open(data.applicationLink, "_blank");
  };
  // console.log(data);

  return (
    <div className="job-tile">
      <div className="top">
        {/* Replace the image and spans with the corresponding job values! */}
        <img src={data.logo} alt="logo" />
        <span id="company" className="material-icons more_horiz">
          {data.company}
        </span>
      </div>
      <div className="rolename">
        <span>{data.roleName}</span>
      </div>
      <div className="description">
        <span>{data.location}</span>
      </div>
      <div className="buttons">
        <div className="button apply-now" onClick={applyNow}>
          Apply Now
        </div>
        <div className="button">Message</div>
      </div>
    </div>
  );
}
