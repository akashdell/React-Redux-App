import React from "react";
import { dispatch } from "redux";
import AddTodo from "../containers/AddTodo";

const App = () => (
  <div>
    <AddTodo dispatch={dispatch} />
  </div>
);

export default App;
