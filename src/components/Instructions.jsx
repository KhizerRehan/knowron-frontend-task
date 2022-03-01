import React, { useEffect, useState } from "react";
import { InstructionCard } from "./InstructionCard";
// import { getInstructionsList } from "../utils";

export function Instructions(props) {
  const [steps, setSteps] = useState([
    {
      stepId: 1,
      description: "Instruction-1",
      imagePath: "",
    },
    {
      stepId: 2,
      description: "Instruction-2",
      imagePath: "",
    },
    {
      stepId: 3,
      description: "Instruction-3",
      imagePath: "",
    },
    {
      stepId: 4,
      description: "Instruction-4",
      imagePath: "",
    },
    {
      stepId: 5,
      description: "Instruction-5",
      imagePath: "",
    },
  ]);

  //   Todo: Enable when API seems to work:
  //   useEffect(() => {
  //     getInstructionsList({
  //       endpoint: "",
  //       options: {},
  //     })
  //       .then((response) => {
  //         if (response.statusCode === 200) {
  //           const { tutorial } = response.data;
  //           setSteps(tutorial.steps);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const handleStart = (event) => {
    console.log("handleStart => ", event);
  };

  const handleDrag = (event) => {
    console.log("handleDrag => ", event);
  };

  const handleStop = (event) => {
    console.log("handleStop => ", event);
  };

  const dragAndDropHandlers = () => {
    return {
      handleStart: handleStart,
      handleDrag: handleDrag,
      handleStop: handleStop,
    };
  };

  if (steps.length === 0) {
    return <p>Oops! No Instructions found</p>;
  }

  return (
    <div className="row d-flex">
      <div
        className="col-6 p-5"
        style={{
          backgroundColor: "rgb(208 208 208 / 10%)",
          borderRadius: "20",
        }}>
        {steps.map((step, index) => {
          return (
            <InstructionCard
              key={index}
              step={step}
              handlers={dragAndDropHandlers()}
            />
          );
        })}
      </div>
    </div>
  );
}
