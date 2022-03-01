import React from "react";
import Draggable from 'react-draggable';
import './App.css'

function App() {

  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };


  const handleStart =(event) => {
    console.log("handleStart => ", event)
  }

  const handleDrag =(event) => {
    console.log("handleDrag => ", event)
  }

  const handleStop =(event) => {
    console.log("handleStop => ", event)
  }

  return (
   <React.Fragment>
      <Draggable
      axis="y"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}>
      <div>
        <div className="box handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>


    <Draggable
      axis="y"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}>
      <div>
        <div className="box handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>

   </React.Fragment>
  );
}

export default App;
