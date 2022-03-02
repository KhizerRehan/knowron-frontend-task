import React from "react";
import Draggable from "react-draggable"; // The default

export function InstructionCard({ step, handlers }) {
  console.log(step, handlers);

  return (
    <React.Fragment>
      <div
          className="row mb-4 p-3"
          style={{ backgroundColor: "#f5f5f5", borderRadius: 10 }}>
          <div className="col-1">
            <h1 className="stepId">{step.stepId}</h1>
          </div>

          <div className="col-9">
            <fieldset className="border p-4">
              <legend className="w-auto fontSize-12">Step description</legend>
              <p className="card-text">{step.description}</p>
            </fieldset>

            {step.imagePath && (
              <img
                src={step.imagePath}
                className="instructionImage"
                alt={step.description}
              />
            )}
          </div>

          <div className="col-1 d-flex align-items-center justify-content-center">
            <span className="cursor" onClick={(event)=>{
              event.stopPropagation();
              handlers.removeInstruction(step.stepId)
            }}>delete</span>
          </div>
        </div>
    </React.Fragment>
  );
}
