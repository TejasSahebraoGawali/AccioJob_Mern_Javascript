import React from "react";
import UncontrolledForm from "./components/form";
import ControlledForm from "./components/controlled-form";

const App = () => {
  return (
    <div>
      <UncontrolledForm></UncontrolledForm>
      <ControlledForm></ControlledForm>
    </div>
  );
};

export default App;
