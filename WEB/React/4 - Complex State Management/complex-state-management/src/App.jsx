import React from "react";
import UncontrolledForm from "./components/form";
import ControlledForm from "./components/controlled-form";
import StateForm from "./components/state-with-object";
import SingleChangeHandler from "./components/single-change-handler";

const App = () => {
  return (
    <div>
      <UncontrolledForm></UncontrolledForm>
      <ControlledForm></ControlledForm>
      <StateForm></StateForm>
      <SingleChangeHandler></SingleChangeHandler>
    </div>
  );
};

export default App;
