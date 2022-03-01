import React, { useEffect, useState } from "react";
import { InstructionCard } from "./InstructionCard";
import { getInstructionsList } from "../utils";

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
      stepId: 4,
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

  if (steps.length === 0) {
    return <p>Oops! No Instructions found</p>;
  }

  return steps.map((step, index) => {
    return (
        <InstructionCard key={index} step={step} />)
  });
}
