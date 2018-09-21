import React from "react";
import { connect } from "react-redux";
import AddTodo from "../containers/AddTodo";

const App = () => (
  <div>
    <AddTodo />
  </div>
);

export default connect()(AddTodo);
