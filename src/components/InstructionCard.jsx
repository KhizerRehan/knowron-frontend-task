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
          className="card handle mt-2 mb-2"
          style={{ backgroundColor: "whitesmoke", borderRadius: 10 }}>
          <div className="card-body ">
            <h5 className="card-title">{step.stepId}</h5>
            <p className="card-text">{step.description}</p>
            {/* <img src={step.imagePath} className="card-img-top" alt={step.description} /> */}
          </div>
        </div>
      </Draggable>
    </React.Fragment>
  );
}
