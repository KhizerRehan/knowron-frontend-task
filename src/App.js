import React from "react";
import { Instructions, LanguagePills, DragAndDropContainer } from "./components";

import './App.css'

function App() {

  return (
    <React.Fragment>
      <LanguagePills />
      <Instructions />

      {/* <DragAndDropContainer /> */}
    </React.Fragment>
  );
}

export default App;
