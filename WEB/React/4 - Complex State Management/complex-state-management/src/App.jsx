import React from "react";
import UncontrolledForm from "./components/form";
import ControlledForm from "./components/controlled-form";
import StateForm from "./components/state-with-object";
import SingleChangeHandler from "./components/single-change-handler";
import RegistrationForm from "./components/registration-form";
import Todos from "./components/Todo List/todos";

const App = () => {
  return (
    <>
      {/* <UncontrolledForm></UncontrolledForm>
      <ControlledForm></ControlledForm>
      <StateForm></StateForm>
      <SingleChangeHandler></SingleChangeHandler>
      <RegistrationForm></RegistrationForm> */}
      <Todos></Todos>
    </>
  );
};

export default App;
