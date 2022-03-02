import React, { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { InstructionCard } from "./InstructionCard";
import { LanguagePills } from "./LanguagePills";

import mockData from "./mockData.json";

export function Instructions(props) {
  const [dragAndHoverIndexes, setDragAndHoverIndexes] = useState({
                                                                   dragIndex: 0,
                                                                   hoverIndex: 0
                                                                 });
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const currentStepsState = JSON.parse(JSON.stringify(steps));
    const { dragIndex, hoverIndex } = dragAndHoverIndexes;
    updatePostion(currentStepsState, dragIndex, hoverIndex);

    for (let i = 0; i < currentStepsState.length; i++) {
      currentStepsState[i].stepId = i + 1; // update stepId no
    }
    setSteps(currentStepsState);
  }, [dragAndHoverIndexes]);

  const updatePostion = (arr, fromIndex, toIndex) => {
    if (!(Array.isArray(arr) && arr.length > 0)) {
      return;
    }
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    console.log("Before=>", arr);
    arr.splice(toIndex, 0, element);
    console.log("After=>", arr);
  };

  // Todo: Enable when API seems to work:
  useEffect(() => {
    setSteps(mockData.tutorial.steps);
  }, []);

  // Todo: Enable when API seems to work:
  // useEffect(() => {
  //   getInstructionsList({
  //     endpoint: "",
  //     options: {},
  //   })
  //     .then((response) => {
  //       if (response.statusCode === 200) {
  //         debugger;
  //         const { tutorial } = response.data;
  //         setSteps(tutorial.steps);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const addStep = () => {
    const dummyPaylaod = {
      stepId: steps.length + 1,
      description: `Instruction-${steps.length + 1}`,
      imagePath: ""
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

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    console.log("dragIndex", dragIndex);
    console.log("hoverIndex", hoverIndex);

    setDragAndHoverIndexes({
                             dragIndex,
                             hoverIndex
                           });
  }, []);

  if (steps && steps.length === 0) {
    return <p>Oops! No Instructions found</p>;
  }

  return (
    <div className="row d-flex">
      <div className={"col-12 col-lg-6"}>
        <div className="m-4 p-4 tabs-position">
          <div className="row">
            <div className="col-9">
              <LanguagePills />
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-orange fontSize-13" onClick={addStep}>
                Publish tutorial
              </button>
            </div>
          </div>
        </div>
        <div
          className="m-4 p-4"
          style={{borderRadius: "20"}}>
          <DndProvider backend={HTML5Backend}>
            {steps.length > 0 &&
            steps.map((step, index) => {
              return (
                <InstructionCard
                  key={step.stepId}
                  id={step?.stepId}
                  text={step?.description}
                  index={index}
                  step={step}
                  moveCard={moveCard}
                  removeInstruction={removeInstruction}
                />
              );
            })}
          </DndProvider>
        </div>

        <div className="col-4 p-4 stepBtn">
          <button type="button" className="btn btn-orange w-50" onClick={addStep}>
            + Step
          </button>
        </div>
        <br />
        <br />
      </div>

    </div>
  );
}
