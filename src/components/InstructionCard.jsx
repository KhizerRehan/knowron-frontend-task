import React from "react";

export function InstructionCard({step}) {


  return (
     <React.Fragment>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{step.stepId}</h5>
          <p className="card-text">{step.description}</p>
          {/* <img src={step.imagePath} className="card-img-top" alt={step.description} /> */}
        </div>
      </div>
     </React.Fragment>
  );
}
