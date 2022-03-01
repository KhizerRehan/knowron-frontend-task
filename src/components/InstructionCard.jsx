import React from "react";
import Draggable from "react-draggable"; // The default

export function InstructionCard({ step, handlers }) {
  console.log(step, handlers);
  debugger;

  return (
    <React.Fragment>
      <Draggable
        axis="y"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handlers.handleStart}
        onDrag={handlers.handleDrag}
        onStop={handlers.handleStop}>
        <div
          className="row mb-4 p-3 handle"
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
            <span>delete</span>
          </div>
        </div>
      </Draggable>
    </React.Fragment>
  );
}
