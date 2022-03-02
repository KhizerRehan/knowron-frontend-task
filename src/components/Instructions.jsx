import React, { useEffect, useState, useCallback } from "react";
import { InstructionCard } from "./InstructionCard";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Card } from "./Card";
// import { getInstructionsList } from "../utils";
import "./styles.css";

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

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    console.log("dragIndex", dragIndex);
    console.log("hoverIndex", hoverIndex);
  }, []);

  const addStep = () => {
    const dummyPaylaod = {
      stepId: steps.length + 1,
      description: `Instruction-${steps.length + 1}`,
      imagePath: "",
    };

    const newInstructionsList = steps.concat(dummyPaylaod);

    setSteps(newInstructionsList);
  };

  const removeInstruction = (stepId) => {
    if (!stepId) {
      return;
    }

    const filteredList = steps.filter((step) => {
      return step.stepId !== stepId;
    });
    setSteps(filteredList);
  };

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
      removeInstruction: removeInstruction,
    };
  };

  if (steps.length === 0) {
    return <p>Oops! No Instructions found</p>;
  }

  return (
    <div className="row d-flex">
      <div
        className="col-6 m-4 p-4"
        style={{
          backgroundColor: "rgb(208 208 208 / 10%)",
          borderRadius: "20",
        }}>
        <DndProvider backend={HTML5Backend}>
          {steps.map((step, index) => {
            debugger;
            return (
              <Card
                key={step.stepId}
                id={step.stepId}
                text={step.description}
                index={index}
                step={step}
                moveCard={moveCard}
                handlers={dragAndDropHandlers()}
              />
            );
          })}
        </DndProvider>
      </div>

      <div className="col-5">{/* EMPTY SPACER */}</div>

      <div className="col-2 ml-4">
        <button type="button" class="btn btn-orange w-50" onClick={addStep}>
          + Step
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}
